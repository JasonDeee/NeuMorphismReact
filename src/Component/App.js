import "../Styles/App.css";
import {
  HashRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
//
//
import { useEffect, useState, Fragment } from "react";

import { HomepageFloat, HomePageFixed } from "./Homepage";

//
//

function App() {
  // Define Users
  const userAgent = navigator.userAgent;
  const isMobile = /iPhone|iPad|iPod|Windows Phone|Android/i.test(userAgent);
  const isEdge = userAgent.includes("Edg");

  // Init States
  // var IsVietnamese = true; // Language Changer

  const [IsVietnamese, SetVietNamese] = useState(true);
  const [FloaterClass, setFoatClassName] = useState("Float");
  const [Type, SetType] = useState("App");

  const ScrollToTop = () => {
    //
    window.scrollTo(0, 0);
  };

  // Init Constances
  const clamp = (num, min, max) => {
    return Math.min(Math.max(num, min), max);
  };

  //

  const EffectInit = () => {
    if (isMobile) {
      SetType("Mobile");
    }

    if (!isEdge) {
      setFoatClassName("Float_Active");
    }

    // Constances
    // Update The Scroll Height
    const body = document.body;
    const main = document.querySelector(".main");

    ScrollToTop();

    const ScrollUpdate = () => {
      //
      let ScrollReszieTimer = setTimeout(() => {
        body.style.height = Math.round(main.clientHeight) + "px";

        clearTimeout(ScrollReszieTimer);
      }, 1555);

      body.style.height = Math.round(main.clientHeight) + "px";
    };

    window.addEventListener("resize", ScrollUpdate);
    window.addEventListener("mousedown", ScrollUpdate);
    window.addEventListener("touchstart", ScrollUpdate);
    //

    // //

    //
    //
    // Scroll Bar
    const ScrollBar_Observer = document.querySelector(".ScrollBar_Observer");
    const Stylized_Scroll_Bar = document.querySelector(".Stylized_Scroll_Bar");
    const ScrollBar_Thumb = document.querySelector(
      ".Stylized_Scroll_Bar .ScrollBar_Thumb"
    );
    const ScrollBar_Track = document.querySelector(
      ".Stylized_Scroll_Bar .ScrollBar_Track"
    );

    const Direction_Button = document.querySelector(
      ".Stylized_Scroll_Bar .Direction_Button"
    );

    const Direction_Button_Observer = new IntersectionObserver((entries) => {
      console.log(entries[0]);
      Direction_Button.classList.toggle(
        "Direction_Button_Active",
        !entries[0].isIntersecting
      );
    });

    // Scroll On Hold
    var ScrollBar_Thumb_IsHolded = false,
      ScrollBar_Track_Top = (window.innerHeight * 31) / 100 + 12,
      ScrollBar_Track_Bottom = (window.innerHeight * 69) / 100 - 12,
      ScrollBar_Track_height = (window.innerHeight * 38) / 100 - 24;

    console.log(ScrollBar_Track_Top);
    console.log(ScrollBar_Track_Bottom);

    const ScrollBar_FuncIn = (e) => {
      e.preventDefault();
      //
      if (e.button == 0) {
        ScrollBar_Thumb_IsHolded = true;
      }
    };

    const ScrollBar_FuncOnActive = (e) => {
      if (ScrollBar_Thumb_IsHolded == true) {
        //

        let Themain =
          clamp(
            e.pageY - window.pageYOffset - ScrollBar_Track_Top,
            0,
            ScrollBar_Track_height
          ) / ScrollBar_Track_height;
        //

        window.scrollTo(
          0,
          main.clientHeight *
            (clamp(
              e.pageY - window.pageYOffset - ScrollBar_Track_Top,
              0,
              ScrollBar_Track_height
            ) /
              ScrollBar_Track_height)
        );
      }
    };

    const ScrollBar_FuncOut = (e) => {
      ScrollBar_Thumb_IsHolded = false;
    };

    //
    ScrollBar_Thumb.addEventListener("mousedown", ScrollBar_FuncIn);
    Stylized_Scroll_Bar.addEventListener("mousemove", ScrollBar_FuncOnActive);
    window.addEventListener("mouseup", ScrollBar_FuncOut);
    window.addEventListener("blur", ScrollBar_FuncOut);

    Direction_Button_Observer.observe(ScrollBar_Observer);

    ScrollUpdate();

    const ScrollFunc = () => {
      main.style.transform = `translateY(-${window.pageYOffset}px)`;

      //
      ScrollBar_Thumb.style.transform = `translateY(calc(${
        window.pageYOffset / (main.clientHeight - window.innerHeight)
      } * (38vh - 24px)))`;
    };
    window.addEventListener("scroll", ScrollFunc);
  };

  useEffect(EffectInit, []);
  return (
    <Router basename="" hashType="slash">
      <Fragment>
        <div className={Type}>
          <div className="ScrollBar_Observer"></div>
          {/*  */}{" "}
          <div className={FloaterClass + " main"}>
            <Switch>
              <Route
                exact
                path="/"
                element={
                  <HomepageFloat IsVietnamese={IsVietnamese}></HomepageFloat>
                }
              />
            </Switch>{" "}
          </div>
          <div className="Static">
            <Switch>
              <Route exact path="/" element={<HomePageFixed></HomePageFixed>} />
            </Switch>
          </div>
          {/*  */}
          <div
            className="Language_Switch"
            onClick={() => {
              SetVietNamese((Prev) => !Prev);
            }}
          >
            <div id="En" className={IsVietnamese ? "" : "Lang_Active"}>
              En
            </div>
            <div className={IsVietnamese ? "Lang_Active" : ""} id="Vi">
              Vi
            </div>
          </div>
          <div className="Stylized_Scroll_Bar">
            <div className="ScrollBar_Track"></div>
            <div className="ScrollBar_Thumb"></div>
            <div className="Direction_Button" onClick={ScrollToTop}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.02 12.22">
                <line
                  className="Direction_Button_Icon-1"
                  x1="5.01"
                  y1=".5"
                  x2="5.01"
                  y2="11.72"
                />
                <polyline
                  className="Direction_Button_Icon-1"
                  points="9.52 7.21 5.01 11.72 .5 7.21"
                />
              </svg>
            </div>
          </div>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
