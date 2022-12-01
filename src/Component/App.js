import "../Styles/App.css";
import {
  HashRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
//
import { useEffect, useState, Fragment } from "react";
import Homepage from "./Homepage";

function App() {
  const ScrollUpdate = () => {
    //
    let body = document.body,
      main = document.querySelector(".Scroller"),
      ScrollReszieTimer = setTimeout(() => {
        body.style.height = Math.round(main.clientHeight) + "px";

        clearTimeout(ScrollReszieTimer);
      }, 1111);
    body.style.height = Math.round(main.clientHeight) + "px";

    console.log("got the Height");
  };

  const EffectInit = () => {
    // Update The Scroll Height
    ScrollUpdate();

    window.addEventListener("resize", ScrollUpdate);
    window.addEventListener("mousedown", ScrollUpdate);
    window.addEventListener("touchstart", ScrollUpdate);
    //
    // Constances
    const main = document.querySelector(".Scroller");
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
        <div className="App">
          <div className="Scroller">
            <Switch>
              <Route exact path="/" element={<Homepage />} />
            </Switch>
          </div>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
