import React from "react";

class Header extends React.Component{
    render() {
        return(
            <header id="main-header">
                <div id="main-header-content">
                    <div class="hidden">
                    <h1>Hello.<br />I'm Miguel Sosa</h1>
                    <p>
                        I'm currently <span>UX/UI Designer at Nuvyta</span>. I like to create interfaces that <span>surprise people</span>.<br /><br />I enjoy working on every step of a project: <span>empathizing, defining, ideating, prototyping, and testing.</span><br /><br />My hobbies include the gym, front-end development, and video games.
                    </p>
                    </div>
                    <img class="hidden" alt="Brain drawing" src="img/brain.svg" />
                </div>
         </header>
        )
    }
}

export default Header;