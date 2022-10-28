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
    //
    // Variables
    var // sx = 0, // For scroll positions
      sy = 0;
    var // dx = sx, // For container positions And Force (Percentage 70% Recommended)
      dy = sy,
      Force = 70;
    function easeScroll() {
      // sx = window.pageXOffset;
      sy = window.pageYOffset;
    }
    window.addEventListener("scroll", easeScroll);
    //
    // Linear Method
    function li(a, b, n) {
      return (1 - n) * a + n * b;
    }
    //

    // Frame Request
    function renderScroll() {
      //We calculate our container position by linear interpolation method
      // dx = li(dx, sx, Force / 1000);
      dy = li(dy, sy, Force / 1000);

      // dx = Math.floor(dx * 100) / 100;
      dy = Math.floor(dy * 100) / 100;

      main.style.transform = `translateY(-${dy}px)`;

      window.requestAnimationFrame(renderScroll);
    }
    window.requestAnimationFrame(renderScroll);
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
