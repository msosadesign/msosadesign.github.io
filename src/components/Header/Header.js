import React from "react";
import brain from "../../img/home-img/brain.svg";

class Header extends React.Component {
  render() {
    return (
      <header id="main-header">
        <div id="main-header-content">
          <div class="hidden">
            <h1>
              Hello.
              <br />
              I'm Miguel Sosa
            </h1>
            <p>
              I'm a <span>Front-end Web Developer</span> and <span>UI Designer</span>
              <br />
              <br />I take pleasure in tackling coding challenges and I'm known
              for my keen eye for detail.
              <br />
              <br />
              My hobbies include the gym, cooking, and video games.
            </p>
          </div>
          <img class="hidden" src={brain} alt="Brain drawing" />
        </div>
      </header>
    );
  }
}

export default Header;
