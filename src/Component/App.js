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
  const [FloaterClass, setFoatClassName] = useState("Float");
  const [Type, SetType] = useState("App");

  const ScrollToTop = () => {
    //
    window.scrollTo(0, 0);
  };

  // Init Constances

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

    const ScrollUpdate = () => {
      //
      let ScrollReszieTimer = setTimeout(() => {
        body.style.height = Math.round(main.clientHeight) + "px";

        clearTimeout(ScrollReszieTimer);
      }, 1555);

      body.style.height = Math.round(main.clientHeight) + "px";

      console.log("got the Height");
    };

    window.addEventListener("resize", ScrollUpdate);
    window.addEventListener("mousedown", ScrollUpdate);
    window.addEventListener("touchstart", ScrollUpdate);
    //

    // //

    // Scroll Bar
    const ScrollBar_Observer = document.querySelector(".ScrollBar_Observer");
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
          {/*  */}{" "}
          <div className={FloaterClass + " main"}>
            <Switch>
              <Route exact path="/" element={<HomepageFloat></HomepageFloat>} />
            </Switch>{" "}
          </div>
          <div className="Static">
            <Switch>
              <Route exact path="/" element={<HomePageFixed></HomePageFixed>} />
            </Switch>
          </div>
          {/*  */}
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
