import React from "react";
import SocialButton from "../SocialButton/SocialButton";
import emailIcon from "../../img/home-img/mail.svg";
import githubIcon from "../../img/home-img/github.svg";
import linkedinIcon from "../../img/home-img/linkedin.svg";
import "./Footer.css";

class Footer extends React.Component {
    render() {
        return (
            <footer className="main-footer">
                <div className="social-container">
                    <h3>Interested in talking?</h3>
                    <div>
                        <SocialButton href="mailto:msosadesign@gmail.com" label="Send me an email" iconsrc={emailIcon} />
                        <SocialButton href="https://github.com/msosadev" label="GitHub" iconsrc={githubIcon} />
                        <SocialButton href="https://www.linkedin.com/in/msosadev" label="LinkedIn" iconsrc={linkedinIcon} />
                    </div>
                </div>
                <div>
                    <span className="caption">Feather Icons:
                        <a
                            href="https://github.com/feathericons/feather/blob/master/LICENSE"
                            target="_blank"
                            rel="noopener noreferrer"
                        > License
                        </a></span>
                </div>
            </footer>
        )
    }
}

export default Footer;