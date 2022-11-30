import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { dataState } from "../../Store/list";
import { Link } from "react-router-dom";
import SBP from "../../Icons/SBP.png";
import DBP from "../../Icons/DBP.png";

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

  function result() {
    if (inputData.SBP >= 160) {
      return "2기 고혈압";
    } else if (inputData.SBP <= 90 || inputData.DBP <= 60) {
      return "저혈압";
    } else if (inputData.SBP < 120 || inputData.DBP < 80) {
      return "정상";
    } else if (inputData.SBP < 140 || inputData.DBP < 90) {
      return "전고혈압";
    } else if (inputData.SBP < 160 || inputData.DBP < 100) {
      return "1기 고혈압";
    } else if (inputData.SBP >= 160 || inputData.DBP > 100) {
      return "2기 고혈압";
    } else {
      return false;
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
            <br />
          </div>
          <div className={styles.footer}>
            <button
              className={styles.btn}
              onClick={(e) => {
                navigate("/BP/Result");
              }}
            >
              결과 보기
            </button>
          </div>
        </div>
        <div className={styles.div}>
          <p className={styles.result}>
            {inputData.name} 님의 현재 혈압상태는{" "}
            <span className={styles.span}>'{result()}'</span>입니다.
          </p>
        </div>
        <content className={styles.content}>
          <p calssName={styles.p}>저혈압 : 90이하 / 60이하</p>
          <p calssName={styles.p}>정상 : 91~119 / 61~79</p>
          <p calssName={styles.p}>전고혈압 : 120~139 / 80~89</p>
          <p calssName={styles.p}>1기고혈압 : 140~159 / 90~99</p>
          <p calssName={styles.p}>2기고혈압 : 160이상 / 100이상</p>
        </content>
      </main>
    </container>
  );
}
