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
      }, 1111);

      body.style.height = Math.round(main.clientHeight) + "px";

      console.log("got the Height");
    };

    window.addEventListener("resize", ScrollUpdate);
    window.addEventListener("mousedown", ScrollUpdate);
    window.addEventListener("touchstart", ScrollUpdate);
    //

    // //

    const ScrollFunc = () => {
      main.style.transform = `translateY(-${window.pageYOffset}px)`;
    };
    window.addEventListener("scroll", ScrollFunc);
  };

  useEffect(EffectInit, []);
  return (
    <Router basename="" hashType="slash">
      <Fragment>
        <div className={Type}>
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
