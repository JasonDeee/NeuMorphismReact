import "../Styles/App.css";
import {
  HashRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
//
//
import { useEffect, useState, Fragment } from "react";
import NavBar from "./Nav";
import TrueHeader from "./TrueHeader";
import Homepage from "./Homepage";

//
//

function App() {
  // Define Users
  const userAgent = navigator.userAgent;
  const isMobile = /iPhone|iPad|iPod|Windows Phone|Android/i.test(userAgent);
  const isEdge = userAgent.includes("Edg");

  // Init States
  const [FloaterClass, setFoatClassName] = useState("Float");

  // Init Constances

  const body = document.body;
  // const main = document.querySelector(".Float");
  //
  const ScrollUpdate = () => {
    //
    let ScrollReszieTimer = setTimeout(() => {
      body.style.height = Math.round(main.clientHeight) + "px";

      clearTimeout(ScrollReszieTimer);
    }, 1111);
    body.style.height = Math.round(main.clientHeight) + "px";

    console.log("got the Height");
  };

  const EffectInit = () => {
    // Constances
    const main = document.querySelector(FloaterClass);
    // Update The Scroll Height
    if (!isEdge) {
      setFoatClassName("Float_Active");
      ScrollUpdate();
    }
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
        <div className="App">
          {/*  */}{" "}
          <div className={FloaterClass}>
            <Switch>
              <Route exact path="/" element={<Homepage />} />
            </Switch>{" "}
          </div>
          <div className="Static">
            <Switch>
              <Route exact path="/" />
            </Switch>
          </div>
          {/*  */}
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
