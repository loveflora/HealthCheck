import App from "../App";
import React from "react";
import { useState } from "react";
import styles from "../Styles/Main.module.css";
import { useNavigate } from "react-router-dom";

// 이름 / 성별 / 만 나이 / 키 / 몸무게 입력

export default function Main() {
  const [inputData, setInputData] = useState({
    name: "",
    gender: "",
    age: 0,
    height: 0,
    weight: 0,
  });

  const navigate = useNavigate();

  const emptyValue = () => {
    if (!inputData.name) {
      alert("성함을 입력해주세요");
      return false;
    } else if (!inputData.age) {
      alert("나이를 입력해주세요");
    } else if (!inputData.gender) {
      alert("성별을 선택해주세요");
    } else if (!inputData.height) {
      alert("키를 입력해주세요");
    } else if (!inputData.weight) {
      alert("몸무게를 입력해주세요");
    }
  };

  return (
    <container className={styles.container}>
      <main className={styles.main}>
        <div className={styles.div}>
          <p className={styles.title}>👋 Check your Health ! </p>
        </div>
        <input
          className={styles.input}
          // value={inputData.name}
          type="text"
          placeholder="성함을 입력해주세요"
          onChange={(e) => setInputData(e.target.value)}
        ></input>
        <p className={styles.gender}>성별</p>
        {/* <label>
          <input type="radio" name="male" value={inputData.gender}>
            여성
          </input>
          <input type="radio" name="female" value={inputData.gender}>
            남성
          </input>
        </label> */}
        <input
          className={styles.input}
          value={inputData.age}
          type="text"
          placeholder="나이를 입력해주세요"
          onChange={(e) => setInputData(e.target.value)}
        ></input>
        <input
          className={styles.input}
          value={inputData.height}
          type="text"
          placeholder="키을 입력해주세요"
          onChange={(e) => setInputData(e.target.value)}
        ></input>
        <input
          className={styles.input}
          value={inputData.weight}
          type="text"
          placeholder="몸무게를 입력해주세요"
          onChange={(e) => setInputData(e.target.value)}
        ></input>
      </main>
      <button
        className={styles.button}
        onClick={() => {
          emptyValue();
          navigate("/BMI");
        }}
      ></button>
    </container>
  );
}
