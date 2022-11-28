import App from "../App";
import React from "react";
import { useState } from "react";
import styles from "../Styles/Main.module.css";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { dataState } from "../Store/list";

// 이름 / 성별 / 만 나이 / 키 / 몸무게 입력

export default function Main() {
  const [inputData, setInputData] = useState({
    name: "",
    gender: "",
    age: "",
    height: "",
    weight: "",
  });

  const navigate = useNavigate();

  const emptyValue = () => {
    if (!inputData.name) {
      alert("성함을 입력해주세요");
      return false;
    } else if (!inputData.age) {
      alert("나이를 입력해주세요");
      return false;
    } else if (!inputData.gender) {
      alert("성별을 선택해주세요");
      return false;
    } else if (!inputData.height) {
      alert("키를 입력해주세요");
      return false;
    } else if (!inputData.weight) {
      alert("몸무게를 입력해주세요");
      return false;
    } else {
      navigate("/BMI");
    }
  };

  const onChange = (e) => {
    const { key, value } = e.target;
    setInputData({
      [key]: value,
    });
  };

  console.log(inputData.name);

  return (
    <container className={styles.container}>
      <main className={styles.main}>
        <div className={styles.div}>
          <p className={styles.title}>👋 Check your Health ! </p>
        </div>
        <form className={styles.form}>
          <p className={styles.p}>Name</p>
          <input
            className={styles.input}
            type="text"
            placeholder="성함을 입력해주세요"
            onChange={onChange}
            value={inputData.name}
          ></input>
          <br />
          <p className={styles.p}>Gender</p>
          <input
            className={styles.gender}
            type="radio"
            name="gender"
            value={inputData.gender}
          />
          남성
          <input
            className={styles.gender}
            type="radio"
            name="gender"
            value={inputData.gender}
          />{" "}
          여성
          <br />
          <p className={styles.p}>Age</p>
          <input
            className={styles.input}
            value={inputData.age}
            type="text"
            placeholder="나이를 입력해주세요"
            onChange={onChange}
          ></input>
          <br />
          <p className={styles.p}>Height</p>
          <input
            className={styles.input}
            value={inputData.height}
            type="text"
            placeholder="키를 입력해주세요"
            onChange={onChange}
          ></input>
          <br />
          <p className={styles.p}>Weight</p>
          <input
            className={styles.input}
            value={inputData.weight}
            type="text"
            placeholder="몸무게를 입력해주세요"
            onChange={onChange}
          ></input>
        </form>
        <button
          className={styles.button}
          onClick={() => {
            emptyValue();
          }}
        >
          RESULT
        </button>
      </main>
    </container>
  );
}
