import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { dataState } from "../../Store/list";
import { Link } from "react-router-dom";
import SBP from "../../Icons/SBP.png";
import DBP from "../../Icons/DBP.png";
import result1 from "../../Icons/result1.png";
import result2 from "../../Icons/result2.png";
import result3 from "../../Icons/result3.png";
import result4 from "../../Icons/result4.png";
import result5 from "../../Icons/result5.png";
import check0 from "../../Icons/check0.png";
import check1 from "../../Icons/check1.png";
import check2 from "../../Icons/check2.png";
import check3 from "../../Icons/check3.png";
import check4 from "../../Icons/check4.png";
import check5 from "../../Icons/check5.png";

import styles from "../../Styles/BPResult.module.css";

// 결과별로 알맞는 개선점을 제안하고 싶음

export default function BPResult() {
  const navigate = useNavigate();
  const [inputData, setInputData] = useRecoilState(dataState);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  function click() {
    if (inputData.SBP === undefined || inputData.SBP === "") {
      return alert("수축기 혈압을 입력해주세요.");
    } else if (inputData.DBP === undefined || inputData.DBP === "") {
      return alert("이완기 혈압을 입력해주세요.");
    } else return navigate("/BP/Result");
  }

  function result() {
    if (inputData.SBP <= 90 && inputData.DBP <= 60) {
      return "저혈압";
    } else if (inputData.SBP < 120 && inputData.DBP < 80) {
      return "정상";
    } else if (inputData.SBP < 140 || inputData.DBP < 90) {
      return "전고혈압";
    } else if (inputData.SBP < 160 || inputData.DBP < 100) {
      return "1기 고혈압";
    } else if (inputData.SBP > 160 || inputData.DBP > 100) {
      return "2기 고혈압";
    } else {
      return false;
    }
  }

  function check() {
    for (let i = 0; i <= 5; i++) {
      if ((result = "저혈압")) {
        return check1;
      } else if ((result = "정상")) {
        return check2;
      } else if ((result = "전고혈압")) {
        return check3;
      } else if ((result = "1기 고혈압")) {
        return check4;
      } else if ((result = "2기 고혈압")) {
        return check5;
      }
    }
  }

  return (
    <container className={styles.container}>
      <main className={styles.main}>
        <nav className={styles.nav}>
          <Link to="/BP" className={styles.link}>
            <li className={styles.li}>Result</li>
          </Link>
          <Link to="/BPInfo" className={styles.link}>
            <li className={styles.li}>고혈압이란 ?</li>
          </Link>
          <Link to="/BPSuggest" className={styles.link}>
            <li className={styles.li}>예방하려면 ?</li>
          </Link>
        </nav>
        <div className={styles.header}>
          <div className={styles.BP}>
            <div>
              <img
                className={styles.img}
                src={SBP}
                alt="SBP"
                width="60"
                height="60"
              />
              <p className={styles.title}>수축기 혈압 </p>
              <input
                className={styles.input}
                type="number"
                value={inputData.SBP}
                name="SBP"
                onChange={onChange}
              />
            </div>
            <br />
            <div>
              <img
                className={styles.img}
                src={DBP}
                alt="DBP"
                width="60"
                height="60"
              />
              <p className={styles.title}>이완기 혈압 </p>
              <input
                className={styles.input}
                type="number"
                value={inputData.DBP}
                name="DBP"
                onChange={onChange}
              />
            </div>
          </div>
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
            {inputData.name} 님의 현재 혈압상태는{" "}
            <span className={styles.span}>'{result()}'</span>입니다.
          </p>
        </div>
        <content className={styles.content}>
          <img
            className={styles.checkImg}
            src={check()}
            alt="check1"
            width="40"
            height="30"
          />
          <img
            className={styles.checkImg}
            src={check()}
            alt="check2"
            width="40"
            height="30"
          />
          <img
            className={styles.checkImg}
            src={check()}
            alt="check3"
            width="40"
            height="30"
          />
          <img
            className={styles.checkImg}
            src={check()}
            alt="check4"
            width="40"
            height="30"
          />
          <img
            className={styles.checkImg}
            src={check()}
            alt="check5"
            width="40"
            height="30"
          />
          <br />
          <img
            className={styles.resultImg}
            src={result1}
            alt="result1"
            width="80"
            height="80"
          />
          <img
            className={styles.resultImg}
            src={result2}
            alt="result2"
            width="80"
            height="80"
          />
          <img
            className={styles.resultImg}
            src={result3}
            alt="result3"
            width="80"
            height="80"
          />
          <img
            className={styles.resultImg}
            src={result4}
            alt="result4"
            width="80"
            height="80"
          />
          <img
            className={styles.resultImg}
            src={result5}
            alt="result5"
            width="80"
            height="80"
          />
        </content>
      </main>
    </container>
  );
}
