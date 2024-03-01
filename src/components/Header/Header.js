import React from "react";
import pfp from "../../img/home-img/pfp.png";
import Navigation from "../Navigation/Navigation";

export default function Header() {

  return (
    <header id="main-header">
      <Navigation />
      <div id="main-header-content">
        <div className="hidden show">
          <h1>
            Hello.
            <br />
            I'm Miguel Sosa
          </h1>
          <p>
            I'm a <span>Front-end Web Developer</span> and{" "}
            <span>UI Designer</span>
            <br />
            <br />I take pleasure in tackling coding challenges and I'm known
            for my keen eye for detail.
            <br />
            <br />
            My hobbies include the gym, cooking, and video games.
          </p>
        </div>
        <img className="hidden show" src={pfp} alt="Brain drawing" />
      </div>
    </header>
  );
}
