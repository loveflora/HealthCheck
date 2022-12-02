import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { dataState } from "../../Store/list";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import BST1 from "../../Icons/BST1.png";
import BST2 from "../../Icons/BST2.png";
import result1 from "../../Icons/result1.png";
import result2 from "../../Icons/result2.png";
import result3 from "../../Icons/result3.png";
import result4 from "../../Icons/result4.png";
import check0 from "../../Icons/check0.png";
import check1 from "../../Icons/check1.png";
import check2 from "../../Icons/check2.png";
import check3 from "../../Icons/check3.png";
import check4 from "../../Icons/check4.png";

import styles from "../../Styles/BSTResult1.module.css";

// 결과별로 알맞는 개선점을 제안하고 싶음

// 저혈당 : 70mg/dL미만
// 정상 : 70~100mg/dL 미만
// 조절필요 : 100 ~ 125mg/dL 미만
// 관리필요 : 125mg/dL 이상

// 조절필요 : 140 ~ 200mg/dL 미만 관리필요 : 200mg/dL 이상

export default function BSTResult1() {
  const navigate = useNavigate();
  const [inputData, setInputData] = useRecoilState(dataState);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  function result() {
    if (inputData.BST < 70) {
      return "저혈당";
    } else if (inputData.BST < 100) {
      return "정상";
    } else if (inputData.BST < 125) {
      return "조절 필요";
    } else if (inputData.BST >= 125) {
      return "관리 필요";
    } else {
      return false;
    }
  }

  function check() {
    for (let i = 0; i <= 5; i++) {
      if ((result = "저혈당")) {
        return check1;
      } else if ((result = "정상")) {
        return check2;
      } else if ((result = "조절 필요")) {
        return check3;
      } else if ((result = "관리 필요")) {
        return check4;
      } else return false;
    }
  }

  function click() {
    if (inputData.meal === "npo") {
      return navigate("/BST/Result1");
    } else if (inputData.meal === "pc") {
      return navigate("/BST/Result2");
    } else if (inputData.meal === "") {
      return window.alert("공복/식후 여부를 체크해주세요.");
    } else if (inputData.BST === "") {
      return window.alert("혈당 수치를 입력해주세요.");
    } else return false;
  }

  console.log(inputData.meal);
  console.log(inputData.BST);

  return (
    <container className={styles.container}>
      <main className={styles.main}>
        <nav className={styles.nav}>
          <Link to="/BST" className={styles.link}>
            <li className={styles.li}>Result</li>
          </Link>
          <Link to="/BSTInfo" className={styles.link}>
            <li className={styles.li}>당뇨병이란 ?</li>
          </Link>
          <Link to="/BSTSuggest" className={styles.link}>
            <li className={styles.li}>예방하려면 ?</li>
          </Link>
        </nav>
        <div className={styles.header}>
          <div className={styles.BST}>
            <div>
              <img
                className={styles.img}
                src={BST1}
                alt="BST1"
                width="70"
                height="50"
              />
              <div className={styles.title}> 공복 혈당 </div>
              <input
                className={styles.radio}
                type="radio"
                value="npo"
                name="meal"
                onChange={onChange}
              />
            </div>
            <br />
            <div>
              <img
                className={styles.img}
                src={BST2}
                alt="BST2"
                width="70"
                height="50"
              />
              <div className={styles.title}> 식후 혈당 </div>
              <input
                className={styles.radio}
                type="radio"
                value="pc"
                name="meal"
                onChange={onChange}
              />
            </div>
          </div>
          <br />
          <input
            className={styles.input}
            type="number"
            value={inputData.BST}
            name="BST"
            placeholder="혈당을 입력해주세요"
            onChange={onChange}
          />
          <br />
          <button
            className={styles.btn}
            onClick={(e) => {
              click();
            }}
          >
            결과 보기
          </button>
        </div>
        <div className={styles.div}>
          <p className={styles.result}>
            {inputData.name} 님의 현재 혈당 상태는
            <span className={styles.span}> '{result()}' </span>입니다.
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.check}>
            <div>
              <img
                className={styles.checkImg}
                src={check()}
                alt="check1"
                width="40"
                height="30"
              />
            </div>
            <div>
              <img
                className={styles.checkImg}
                src={check()}
                alt="check2"
                width="40"
                height="30"
              />
            </div>
            <div>
              <img
                className={styles.checkImg}
                src={check()}
                alt="check3"
                width="40"
                height="30"
              />
            </div>
            <div>
              <img
                className={styles.checkImg}
                src={check()}
                alt="check4"
                width="40"
                height="30"
              />
            </div>
          </div>
          <br />
          <div className={styles.face}>
            <div>
              <img
                className={styles.resultImg}
                src={result1}
                alt="result1"
                width="80"
                height="80"
              />
            </div>
            <div>
              {" "}
              <img
                className={styles.resultImg}
                src={result2}
                alt="result2"
                width="80"
                height="80"
              />
            </div>
            <div>
              <img
                className={styles.resultImg}
                src={result3}
                alt="result3"
                width="80"
                height="80"
              />
            </div>
            <div>
              <img
                className={styles.resultImg}
                src={result4}
                alt="result4"
                width="80"
                height="80"
              />
            </div>
          </div>
        </div>
      </main>
    </container>
  );
}
