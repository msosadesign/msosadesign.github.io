import React from "react";
import SocialButton from "../SocialButton/SocialButton";
import emailIcon from "../../img/home-img/mail.svg";
import githubIcon from "../../img/home-img/github.svg";
import linkedinIcon from "../../img/home-img/linkedin.svg";
import "./Footer.css";

class Footer extends React.Component {
    render() {
        return (
            <footer id="main-footer">
                <div className="social-container">
                    <h3>Interested in talking?</h3>
                    <div>
                        <SocialButton href="mailto:msosadesign@gmail.com" label="Send me an email" iconsrc={emailIcon} />
                        <SocialButton href="https://github.com/msosadesign" label="GitHub" iconsrc={githubIcon} />
                        <SocialButton href="https://www.linkedin.com/in/msosadesign" label="LinkedIn" iconsrc={linkedinIcon} />
                    </div>
                </div>
                <div>
                    <span class="caption"
                    >Brain on the cover:
                        <a
                            target="_blank"
                            class="caption"
                            rel="noopener noreferrer"
                            href="https://www.freepik.com/free-vector/brain-cartoon-vector-icon-illustration-education-object-icon-concept-isolated-premium-vector-flat-cartoon-style_17562640.htm#page=2&query=smart&position=10&from_view=search&track=sph"
                        > Image by catalyststuff </a>
                        on Freepik</span>
                    <span class="caption">Feather Icons:
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