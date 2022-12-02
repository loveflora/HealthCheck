import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { dataState } from "../../Store/list";
import { Link } from "react-router-dom";

import styles from "../../Styles/Nutrition.module.css";

// 결과별로 알맞는 개선점을 제안하고 싶음

export default function BP() {
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
          <Link to="/BMI" className={styles.link}>
            <li className={styles.li}>BMI</li>
          </Link>
          <Link to="/BMR" className={styles.link}>
            <li className={styles.li}>기초대사량</li>
          </Link>
          <Link to="/Nutrition" className={styles.link}>
            <li className={styles.li}>권장영양정보</li>
          </Link>
        </nav>
        <div className={styles.div}>
          <p className={styles.result}>
            {inputData.name} 님의 적정한 단백질 섭취량은
          </p>
        </div>

        <content className={styles.content}>
          <p className={styles.p}>저체중 : 18.5 미만</p>
        </content>
      </main>
    </container>
  );
}
