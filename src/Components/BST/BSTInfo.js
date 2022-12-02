import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { dataState } from "../../Store/list";
import { Link } from "react-router-dom";
import styles from "../../Styles/BSTInfo.module.css";
import DM from "../../Img/DM.jpeg";

// 결과별로 알맞는 개선점을 제안하고 싶음

// 저혈당 : 70mg/dL미만
// 정상 : 70~100mg/dL 미만
// 조절필요 : 100 ~ 125mg/dL 미만
// 관리필요 : 125mg/dL 이상

// 조절필요 : 140 ~ 200mg/dL 미만 관리필요 : 200mg/dL 이상

export default function BST() {
  const navigate = useNavigate();
  const [inputData, setInputData] = useRecoilState(dataState);
  // const [meal, setMeal] = useState("");

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
        <content className={styles.content}>
          <div className={styles.scroll}>
            <h1 className={styles.h1}>당뇨병</h1>
            <h5 className={styles.h4}>
              인슐린의 분비량이 부족하거나 정상적인 기능이 이루어지지 않는 등의
              대사질환의 일종으로, <br />
              혈중 포도당 농도가 높은 것이 특징인 질환
            </h5>
            <br />
            <br />
            <h2 className={styles.h2}>1. 정의</h2>
            <p className={styles.txt}>
              &nbsp;혈액 중의 포도당(혈당)이 높아서 소변으로 포도당이 넘쳐
              나오는데서 지어진 이름입니다.{" "}
              <span className={styles.span}>포도당</span>은 우리가 먹는 음식물
              중 탄수화물의 기본 구성성분입니다. 탄수화물은 위장에서 소화효소에
              의해 포도당으로 변한 다음 혈액으로 흡수됩니다. 흡수된 포도당이
              우리 몸의 세포들에서 이용되기 위해서는{" "}
              <span className={styles.light}>인슐린</span>이라는 호르몬이 반드시
              필요합니다. 인슐린은 췌장 랑게르한스섬에서 분비되어 식사 후
              올라간&nbsp;
              <span className={styles.underline}>혈당을 낮추는 기능</span>을
              합니다. <br />
              &nbsp;만약 여러 가지 이유로 인하여 인슐린이 모자라거나 성능이
              떨어지게 되면, 체내에 흡수된 포도당은 이용되지 못하고 혈액 속에
              쌓여 소변으로 넘쳐 나오게 되며, 이런 병적인 상태를{" "}
              <span className={styles.underline}>'당뇨병'</span> 이라고 부르고
              있습니다. <br />
              우리나라도 최근 들어 사회 경제적인 발전으로 과식, 운동부족,
              스트레스 증가 등으로 인하여 당뇨병 인구가 늘고 있습니다.
            </p>
            <br />
            <img className={styles.dm} src={DM} alt="DM" width="600px" />
            <br />
            <br />
            <h2 className={styles.h2}>2. 원인</h2>
            <h3 className={styles.h3}>1) 유전적 요인</h3>
            <p className={styles.txt}>
              &nbsp;당뇨병의 발병 원인은 아직 정확하게 규명이 되어있지 않습니다.
              현재까지 밝혀진 바에 의하면
              <span className={styles.underline}>
                유전적 요인이 가장 가능성이 큽니다.
              </span>
              &nbsp;만약, 부모가 모두 당뇨병인 경우 자녀가 당뇨병이 생길
              가능성은 30% 정도이고, 한 사람만 당뇨병인 경우는 15% 정도입니다.
            </p>
            <br />
            <h3 className={styles.h3}>2) 환경적 요인</h3>
            <h4 className={styles.h4}>(1) 비만</h4>
            <p className={styles.txt}>
              계속된 비만으로 지방 증가 <br />
              👉 체내 인슐린 요구량 증가 <br />
              👉{" "}
              <span className={styles.underline}>
                췌장의 인슐린 분비기능 저하{" "}
              </span>
              <br />
              👉 <span className={styles.light}>당뇨병 발생</span>
            </p>
            <br />

            <h4 className={styles.h4}>(2) 식생활</h4>
            <p className={styles.txt}>
              <span className={styles.underline}>과식</span>은 비만의 원인이
              됩니다.
              <br />
              <span className={styles.underline}>
                탄수화물(설탕포함)과 지방의 과다한 섭취
              </span>
              는 피해야 합니다.
            </p>
            <br />
            <h4 className={styles.h4}>(3) 운동부족</h4>
            <p className={styles.txt}>
              운동부족은{" "}
              <span className={styles.underline}>
                비만을 초래하고, 근육을 약화시키며, 저항력을 저하시킵니다.
              </span>
              <br />
              또한{" "}
              <span className={styles.underline}>
                고혈압, 동맥경화 등 성인병의 원인
              </span>
              이 됩니다.
            </p>
            <br />
            <h4 className={styles.h4}>(4) 연령</h4>
            <p className={styles.txt}>
              당뇨병은 <span className={styles.light}>중년 이후</span>에 많이
              발생하며, 연령이 높아질수록 발병률이 높아집니다. <br />
            </p>
            <br />
            <h4 className={styles.h4}>(5) 성별</h4>
            <p className={styles.txt}>
              일반적으로 <span className={styles.light}>여성</span>이 남성보다
              발병률이 높습니다. 그 이유는 임신이라는 호르몬 환경의 변화
              때문입니다. 호르몬 분비 당뇨병과 직접 관련이 있는
              <span className={styles.underline}>
                인슐린과 글루카곤 호르몬
              </span>{" "}
              에 이상이 생기면 즉각적으로 당뇨병이 유발되며, 뇌하수체나 갑상선,
              부신호르몬과 같은 간접적인 관련인자도 당뇨병을 일으킬 수 있습니다.
            </p>
            <br />
            <h4 className={styles.h4}>(6) 스트레스</h4>
            <p className={styles.txt}>
              우리 몸에 오래 축적된 스트레스는{" "}
              <span className={styles.underline}>
                부신피질호르몬의 분비를 증가
              </span>
              시키고, 저항력을 떨어뜨려 질병을 유발합니다.
            </p>
            <br />
            <h4 className={styles.h4}>(7) 감염증</h4>
            <p className={styles.txt}>
              감염증에 걸리면{" "}
              <span className={styles.underline}>
                신체의 저항력이 떨어지고, 당대사도 나빠지게 되어
              </span>
              당뇨병이 발생하기 쉽습니다. 특히{" "}
              <span className={styles.underline}>췌장염, 간염, 담낭염</span>{" "}
              등은 당뇨병을 일으킬 가능성이 크므로 신속하게 치료해야 합니다.
            </p>
          </div>
        </content>
      </main>
    </container>
  );
}
