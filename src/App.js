import React from "react";
import "./App.scss";
import Stars from "./assets/images/stars.png";
import Moon from "./assets/images/moon.png";
import Mountains_front from "./assets/images/mountains_front.png";
import Mountains_behind from "./assets/images/mountains_behind.png";

const App = () => {
  return (
    <>
      <header>
        <a className="logo" href="https://">
          logo
        </a>
        <ul>
          <li>
            <a href="https://" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="https://">About</a>
          </li>
          <li>
            <a href="https://">Work</a>
          </li>
          <li>
            <a href="https://">Contact</a>
          </li>
        </ul>
      </header>
      <section>
        <img src={Stars} alt="" />
        <img src={Moon} alt="" className="moon" />
        <h2 className="text">Moon Light</h2>
        <img src={Mountains_behind} alt="" />
        <a href="https://">Explore</a>
        <img src={Mountains_front} alt="" className="mountains-front" />
      </section>
    </>
  );
};

export default App;
