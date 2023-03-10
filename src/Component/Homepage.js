import "../Styles/App.css";
import { useEffect, useState } from "react";
import { ButtonFull, ButtonSlider } from "./Buttons";

import Copy_Logo from "../Assets/Copy_Logo.svg";

const HomepageFloat = () => {
  const TestPrevFunct = () => {
    console.log("Prev");
  };
  const TestNextFunct = () => {
    console.log("Next");
  };
  return (
    <main className="HomepageFloat">
      <section className="Section" id="Sec1Float">
        <ButtonFull IconURL={Copy_Logo} Label="Khám phá"></ButtonFull>
      </section>
      <section className="Section" id="Sec2Float">
        <ButtonSlider
          PrevFunc={TestPrevFunct}
          NextFunc={TestNextFunct}
        ></ButtonSlider>
      </section>{" "}
      <section className="Section" id="Sec3Float"></section>{" "}
      <section className="Section" id="Sec5Float"></section>
    </main>
  );
};

const HomePageFixed = () => {
  //
  return (
    <main className="HomePageFixed">
      <section className="Section" id="Sec1Fixed"></section>
      <section className="Section" id="Sec2Fixed"></section>
      <section className="Section" id="Sec3Fixed"></section>
      <section className="Section" id="Sec4Fixed"></section>
    </main>
  );
};

export { HomepageFloat, HomePageFixed };
