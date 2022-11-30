import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { dataState } from "../../Store/list";
import { Link } from "react-router-dom";
import BST1 from "../../Icons/BST1.png";
import BST2 from "../../Icons/BST2.png";
import BST3 from "../../Icons/BST3.png";

import styles from "../../Styles/BST.module.css";

// 결과별로 알맞는 개선점을 제안하고 싶음

// 저혈당 : 70mg/dL미만
// 정상 : 70~100mg/dL 미만
// 조절필요 : 100 ~ 125mg/dL 미만
// 관리필요 : 125mg/dL 이상

// 조절필요 : 140 ~ 200mg/dL 미만 관리필요 : 200mg/dL 이상

export default function BST() {
  const navigate = useNavigate();
  const [inputData, setInputData] = useRecoilState(dataState);
  const [meal, setMeal] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

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
        <div className={styles.header}></div>
      </main>
    </container>
  );
}
