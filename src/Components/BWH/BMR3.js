import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { dataState } from "../../Store/list";
import { Link } from "react-router-dom";

import styles from "../../Styles/BMR3.module.css";

export default function Board() {
  const navigate = useNavigate();
  const [inputData, setInputData] = useRecoilState(dataState);

  function BMR() {
    if (inputData.gender == "male") {
      return (
        66.47 +
        13.75 * inputData.weight +
        5 * inputData.height -
        6.76 * inputData.age
      );
    } else if (inputData.gender == "female") {
      return (
        655.1 +
        9.56 * inputData.weight +
        1.85 * inputData.height -
        4.68 * inputData.age
      );
    } else {
      return false;
    }
  }

  // 남자 : 66.47+(13.75*체중)+(5*키)-(6.76*나이)
  // 여자 : 655.1+(9.56*체중)+(1.85*키)-(4.68*나이)

  // 평균대사량
  //  20 ~ 29세	1728 ± 368.2 ㎉	1311.5 ± 233.0 ㎉
  //  30 ~ 49세	1669.5 ± 302.1 ㎉	1316.8 ± 225.9 ㎉
  //  50세 이상	1493.8 ± 315.3 ㎉	1252.5 ± 228.6 ㎉

  function avgBMR() {
    if (inputData.gender == "male") {
      if (inputData.age < 30) {
        return "1359.8 ~ 2096.2";
      } else if (inputData.age < 50) {
        return "1367.4 ~ 1971.6";
      } else if (inputData.age >= 50) {
        return "1178.5 ~ 1809.1";
      } else return false;
    } else if (inputData.gender == "female") {
      if (inputData.age < 30) {
        return "1078.5 ~ 1544.5";
      } else if (inputData.age < 50) {
        return "1090.9 ~ 1542.7";
      } else if (inputData.age >= 50) {
        return "1023.9 ~ 1481.1";
      } else return false;
    }
  }

  function gender() {
    if (inputData.gender == "male") {
      return "남성";
    } else if (inputData.gender == "female") {
      return "여성";
    }
  }

  function age() {
    if (inputData.age < 30) {
      return "10 ~ 20대";
    } else if (inputData.age < 50) {
      return "30 ~ 40대";
    } else if (inputData.age >= 50) {
      return "50대 이상";
    } else return false;
  }

  function suggest() {
    if (inputData.gender == "male") {
      if (inputData.age < 30) {
        if (BMR() >= 1359.8 && BMR() <= 2096.2) {
          return "적정 수준에 있습니다.";
        } else if (BMR() < 1359.8) {
          return "낮습니다.";
        } else if (BMR() > 2096.2) {
          return "높습니다.";
        } else return false;
      } else if (inputData.age < 50) {
        if (BMR() >= 1367.4 && BMR() <= 1971.6) {
          return "적정 수준에 있습니다.";
        } else if (BMR() < 1367.4) {
          return "낮습니다.";
        } else if (BMR() > 1971.6) {
          return "높습니다.";
        } else return false;
      } else if (inputData.age >= 50) {
        if (BMR() >= 1178.5 && BMR() <= 1809.1) {
          return "적정 수준에 있습니다.";
        } else if (BMR() < 1178.5) {
          return "낮습니다.";
        } else if (BMR() > 1809.1) {
          return "높습니다.";
        } else return false;
      }
    } else if (inputData.gender == "female") {
      if (inputData.age < 30) {
        if (BMR() >= 1078.5 && BMR() <= 1544.5) {
          return "적정 수준에 있습니다.";
        } else if (BMR() < 1078.5) {
          return "낮습니다.";
        } else if (BMR() > 1544.5) {
          return "높습니다.";
        } else return false;
      } else if (inputData.age < 50) {
        if (BMR() >= 1090.9 && BMR() <= 1542.7) {
          return "적정 수준에 있습니다.";
        } else if (BMR() < 1090.9) {
          return "낮습니다.";
        } else if (BMR() > 1542.7) {
          return "높습니다.";
        } else return false;
      } else if (inputData.age >= 50) {
        if (BMR() >= 1023.9 && BMR() <= 1481.1) {
          return "적정 수준에 있습니다.";
        } else if (BMR() < 1023.9) {
          return "낮습니다.";
        } else if (BMR() > 1481.1) {
          return "높습니다.";
        } else return false;
      }
    }
  }

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
            {inputData.name} 님의 기초 대사량은{" "}
            <span className={styles.span}>
              '{(Math.floor(BMR()) * 100) / 100}'kcal
            </span>
            &nbsp;입니다.
          </p>
        </div>

        <content className={styles.content}>
          <p className={styles.avg}>
            {" "}
            <span className={styles.span}>
              {" "}
              {gender()} {age()}
            </span>
            의 평균 기초 대사량은{" "}
            <span className={styles.span}> {avgBMR()} </span> kcal 입니다.
          </p>
          <br />
          <p className={styles.avg}>
            따라서 {inputData.name}님의 기초 대사량은{" "}
            <span className={styles.span}>{suggest()}</span>
          </p>
        </content>
        <button className={styles.btn}>👉🏻 결과해석 보러가기 </button>
        <div>
          <h2 className={styles.h2}>기초 대사량이란 ?</h2>
          <p>
            우리 몸이 생명을 유지하는 데 필요한 최소한의 에너지를 말한다. 이는
            우리의 심장이 뛰고, 호흡을 하고, 체온을 유지하며, 뇌가 활동을 하는데
            필요한 생명 유지를 위한 에너지로 우리가 사용하는 전체 에너지 중
            기초대사량이 차지하는 에너지는 약 70%에 달한다
          </p>
        </div>
      </main>
    </container>
  );
}
