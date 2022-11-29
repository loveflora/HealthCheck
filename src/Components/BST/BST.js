import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { dataState } from "../../Store/list";
import { Link } from "react-router-dom";

import styles from "../../Styles/BST.module.css";

// 결과별로 알맞는 개선점을 제안하고 싶음

export default function BST() {
  const navigate = useNavigate();
  const [inputData, setInputData] = useRecoilState(dataState);

  // function result() {
  //   if (BMI < 18.5) {
  //     return "저체중";
  //   } else if (BMI < 23) {
  //     return "정상";
  //   } else if (BMI < 25) {
  //     return "과체중";
  //   } else if (BMI < 30) {
  //     return "비만";
  //   } else {
  //     return "고도비만";
  //   }
  // }

  //   for(var i=1; i<=17; i++) {
  //     if(user_area == i) {
  //     img_src = '../public/img/'+ i + '_logo.png';
  //     }
  // }
  // return img_src;

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
        <div className={styles.div}>
          <input></input>
          <input></input>

          <button></button>
          <p className={styles.result}>
            {inputData.name} 님의 혈당은{" "}
            {/* <span className={styles.span}>'{result()}'</span>입니다. */}
          </p>
        </div>

        <content className={styles.content}>
          <p calssName={styles.p}>저체중 : 18.5 미만</p>
          <p calssName={styles.p}>정상 : 18.5 ~ 23 </p>
          <p calssName={styles.p}>과체중 : 23 ~ 25 </p>
          <p calssName={styles.p}>비만 : 25 ~ 30 </p>
          <p calssName={styles.p}>고도비만 : 30 이상 </p>
        </content>
      </main>
    </container>
  );
}
