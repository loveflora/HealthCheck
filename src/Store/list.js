import { atom, useRecoilValue } from "recoil";

export const dataState = atom({
  key: "dataState",
  default: {
    name: "아무개",
    gender: "female",
    age: "25",
    height: "169",
    weight: "55",
  },
});
