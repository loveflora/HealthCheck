import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { dataState } from "../Store/list";
import styles from "../Styles/Main.module.css";

// 이름 / 성별 / 만 나이 / 키 / 몸무게 입력

// gender 입력 안되어도, 넘어가는지 확인 !!!

export default function Main() {
  const navigate = useNavigate();
  const [inputData, setInputData] = useRecoilState(dataState);

  // const [inputData, setInputData] = useState({
  //   name: "",
  //   gender: "",
  //   age: "",
  //   height: "",
  //   weight: "",
  // });

  const emptyValue = () => {
    if (!name) {
      alert("성함을 입력해주세요");
      return false;
    } else if (!gender) {
      alert("성별을 선택해주세요");
      return false;
    } else if (!age) {
      alert("나이를 입력해주세요");
      return false;
    } else if (!height) {
      alert("키를 입력해주세요");
      return false;
    } else if (!weight) {
      alert("몸무게를 입력해주세요");
      return false;
    } else return true;
  };

  // 비구조화 할당
  const { name, gender, age, height, weight } = inputData;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  // const result = () => {
  //   console.log(inputData);
  // };

  return (
    <container className={styles.container}>
      <main className={styles.main}>
        <div className={styles.div}>
          <p className={styles.title}>🩺 Check your Health ! </p>
        </div>
        <form className={styles.form}>
          <p className={styles.p}>Name</p>
          <input
            className={styles.input}
            type="text"
            placeholder="성함"
            onChange={onChange}
            value={name}
            name="name"
          ></input>
          <br />
          <p className={styles.p}>Gender</p>
          <input
            className={styles.gender}
            type="radio"
            name="gender"
            value="male"
            onChange={onChange}
          />
          남성
          <input
            className={styles.gender}
            type="radio"
            name="gender"
            value="female"
            onChange={onChange}
          />{" "}
          여성
          <br />
          <p className={styles.p}>Age</p>
          <input
            className={styles.input}
            value={age}
            type="text"
            placeholder="만 나이"
            onChange={onChange}
            name="age"
          ></input>
          <br />
          <p className={styles.p}>Height</p>
          <input
            className={styles.input}
            value={height}
            type="text"
            placeholder="키 (cm)"
            onChange={onChange}
            name="height"
          ></input>
          <br />
          <p className={styles.p}>Weight</p>
          <input
            className={styles.input}
            value={weight}
            type="text"
            placeholder="몸무게 (kg)"
            onChange={onChange}
            name="weight"
          ></input>
        </form>
        <button
          className={styles.button}
          onClick={() => {
            if (emptyValue()) {
              return navigate("/BMI");
            }
          }}
        >
          BMI
        </button>
        <button
          className={styles.button1}
          onClick={() => {
            if (emptyValue()) {
              return navigate("/BP");
            }
          }}
        >
          Blood Pressure
        </button>
        <button
          className={styles.button2}
          onClick={() => {
            if (emptyValue()) {
              return navigate("/BST");
            }
          }}
        >
          Blood Sugar
        </button>
      </main>
    </container>
  );
}
