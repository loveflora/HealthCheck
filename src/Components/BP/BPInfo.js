import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { dataState } from "../../Store/list";
import { Link } from "react-router-dom";

import styles from "../../Styles/BPInfo.module.css";

// 결과별로 알맞는 개선점을 제안하고 싶음

export default function BP() {
  const navigate = useNavigate();
  const [inputData, setInputData] = useRecoilState(dataState);

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
        <div className={styles.div}></div>

        <content className={styles.content}>
          <h2 className={styles.h2}>1. 증상</h2>
          <p calssName={styles.p}>
            고혈압은 혈압이 여러 원인으로 인해 높아진 상태를 의미합니다.
            <br />
            혈압은 동맥혈관 벽에 대항한 혈액의 압력을 말합니다.
            <br />
            혈액의 압력은 심장이 수축하여 동맥혈관으로 혈액을 보낼 때 가장
            높은데, 이때의 혈압을 수축기 혈압이라고 합니다. 또한 심장이 늘어나서
            혈액을 받아들일 때 가장 낮은데, 이때의 혈압을 이완기 혈압이라고
            합니다. <br />
            우리나라 성인 인구의 약 30%가 이러한 혈압이 높아진 증상인 고혈압이
            있는 것으로 추정됩니다.{" "}
          </p>
        </content>
      </main>
    </container>
  );
}
