import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { dataState } from "../../Store/list";
import { Link } from "react-router-dom";

import styles from "../../Styles/BMR2.module.css";

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
        <p className={styles.result}>
          {inputData.name} 님의 기초 대사량은{" "}
          <span className={styles.span}>
            '{(Math.floor(BMR()) * 100) / 100}'kcal
          </span>
          &nbsp;입니다.
        </p>

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
        <div className={styles.scroll}>
          <h2 className={styles.h2}>기초 대사량이란 ?</h2>
          <p className={styles.sug}>
            우리 몸이 생명을 유지하는 데 필요한 최소한의 에너지를 말한다. 이는
            우리의 심장이 뛰고, 호흡을 하고, 체온을 유지하며, 뇌가 활동을 하는데
            필요한 생명 유지를 위한 에너지로 우리가 사용하는 전체 에너지 중
            기초대사량이 차지하는 에너지는 약 70%에 달한다
          </p>
          <br />
          <br />
          <h2 className={styles.h2}>
            적정 수준의 기초 대사량을 보유하고 계시네요 !
          </h2>
          <p>
            다이어트가 목적이라면, 기초대사량 상승을 목표로 삼는 것을 추천드려요
            👍🏻
          </p>
          <br />
          <br />
          <h2 className={styles.h2}>기초 대사량을 높이는 방법</h2>
          <p className={styles.sug}>
            <h3>1. 주 3회 근력운동</h3>
            기초대사량을 높이는 가장 중요한 방법은 근력운동이다. 근육이 많으면
            쉬고 있을 때도 칼로리를 더 많이 소모한다. 하루를 기준으로 아무런
            활동을 하지 않을 때 근육은 1kg 당 약 14칼로리를 소비하지만, 지방은
            1kg은 4칼로리 밖에 태우지 못한다. 다이어트를 위해서는 유산소운동과
            함께 근력운동을 병행하는 것이 중요하다.
            <br />
            <br />
            <h3>2. 충분한 단백질 섭취</h3>
            기초대사량을 높이기 위해서는 근육량에 영향을 미치는 ‘단백질’이
            풍부한 음식을 충분히 섭취해야 한다. 단백질은 근육량을 늘려서
            기초대사량을 높여주기 때문에 매일 체중 1kg 당 0.8g ~ 1.2g을
            섭취하고, 닭고기와 생선, 유제품, 통곡류, 콩, 견과류 등을 골고루 먹는
            것이 좋다.
            <br />
            <br />
            <h3>3. 물은 하루 2L 이상</h3>
            물은 신체 내 장기의 활동을 활발하게 만들어 기초대사량을 증가시키는
            효과가 있다. 단 한 번에 많은 양의 물을 마시기보다는 조금씩 자주
            마시는 것이 좋다.
            <br />
            <br />
            <h3>4. 7시간 이상 숙면</h3>
            기초대사량을 높이기 위해 기본적으로 해야 할 일은 바로 숙면이다. 하루
            7시간 이상 제대로 숙면을 취하는 것이 중요하다. 특히 잠자리에 들기 전
            음식을 섭취하면 소화가 되지 않아 깊은 잠을 잘 수 없으며, 충분한
            숙면을 취해야 신진대사가 활발해지며 기초대사량이 증가한다.
            <br />
            <br />
            <h3>5. 아침 식사 필수</h3>
            아침 식사는 기초대사량을 높이는 필수 사항이다. 잠을 자는 동안 체온과
            신진대사가 떨어져 몸의 기능이 제대로 발휘되지 않기 때문에 아침
            식사를 통해 체온과 기초대사량을 높여줘야 한다. 이외에도 스트레스
            해소와 비타민D 보충도 기초대사량을 높이는 방법이다. 가장 중요한 것은
            규칙적인 습관과 운동이다. 몸의 신진대사를 활발하게 하고 운동과 고른
            영양 섭취를 통해 기초대사량을 높이면 무리하게 살을 빼지 않아도 된다
            {/* [출처] 대한민국 정책브리핑(www.korea.kr) */}
          </p>
        </div>
      </main>
    </container>
  );
}
