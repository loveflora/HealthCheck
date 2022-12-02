import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { dataState } from "../../Store/list";
import { Link } from "react-router-dom";

import styles from "../../Styles/BMI.module.css";
import weight1 from "../../Icons/weight1.png";
import weight2 from "../../Icons/weight2.png";
import weight3 from "../../Icons/weight3.png";
import weight4 from "../../Icons/weight4.png";
import weight5 from "../../Icons/weight5.png";
import check0 from "../../Icons/check0.png";
import check1 from "../../Icons/check1.png";
import check2 from "../../Icons/check2.png";
import check3 from "../../Icons/check3.png";
import check4 from "../../Icons/check4.png";
import check5 from "../../Icons/check5.png";

// BMI = KG / M*M

export default function BMI() {
  const navigate = useNavigate();
  const [inputData, setInputData] = useRecoilState(dataState);

  const BMI = inputData.weight / (inputData.height / 100) ** 2;

  //   저체중 : 18.5 미만
  // 정상 : 18.5 이상 23 미만
  // 과체중 : 23 이상 25 미만
  // 비만 : 25 ~ 30
  // 고도비만 : 30 이상

  function result() {
    if (BMI < 18.5) {
      return "저체중";
    } else if (BMI < 23) {
      return "정상";
    } else if (BMI < 25) {
      return "과체중";
    } else if (BMI < 30) {
      return "비만";
    } else {
      return "고도비만";
    }
  }

  const arr = ["저체중", "정상", "과체중", "비만", "고도비만"];
  const checkArr = [check1, check2, check3, check4, check5];

  const data = arr.findIndex((v) => result() === v);
  const checkData = checkArr[data];

  // 나머지
  const rest = arr.filter((v, id) => id !== data);

  // const restImg = rest.findIndex((v) => result() === v);

  function restImg() {
    if (rest.includes(result())) return check0;
  }

  console.log("arr : " + arr);
  console.log("data : " + data);
  console.log("rest : " + rest);
  console.log("checkData : " + checkData);
  console.log(restImg());

  // function js() {
  //   for (let i = 0; i <= 5; i++) {
  //     if ((result = "저체중")) {
  //       return check1;
  //     } else if ((result = "정상")) {
  //       return check2;
  //     } else if ((result = "과체중")) {
  //       return check3;
  //     } else if ((result = "비만")) {
  //       return check4;
  //     } else if ((result = "고도비만")) {
  //       return check5;
  //     }
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
            {inputData.name} 님의 BMI 지수는{" "}
            <span className={styles.span}>{Math.floor(BMI * 100) / 100}</span>
            로, <span className={styles.span}>'{result()}'</span>입니다.
          </p>
        </div>
        <img
          className={styles.checkImg}
          src={checkData}
          alt="check"
          width="40"
          height="30"
        />
        <img
          className={styles.checkImg}
          src={restImg()}
          alt="check0"
          width="40"
          height="30"
        />

        {/* <img
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
        /> */}
        <img
          className={styles.img}
          src={weight1}
          alt="weight1"
          width="60"
          height="80"
        />
        <img
          className={styles.img}
          src={weight2}
          alt="weight2"
          width="60"
          height="80"
        />
        <img
          className={styles.img}
          src={weight3}
          alt="weight3"
          width="60"
          height="80"
        />
        <img
          className={styles.img}
          src={weight4}
          alt="weight4"
          width="60"
          height="80"
        />
        <img
          className={styles.img}
          src={weight5}
          alt="weight5"
          width="60"
          height="80"
        />
        <br />

        <div className={styles.content}>
          <h2 className={styles.h2}> ~~~ 참고사항 ~~~ </h2>
          <p className={styles.p}>저체중 : 18.5 미만</p>
          <p className={styles.p}>정상 : 18.5 ~ 23 </p>
          <p className={styles.p}>과체중 : 23 ~ 25 </p>
          <p className={styles.p}>비만 : 25 ~ 30 </p>
          <p className={styles.p}>고도비만 : 30 이상 </p>
        </div>
      </main>
    </container>
  );
}
