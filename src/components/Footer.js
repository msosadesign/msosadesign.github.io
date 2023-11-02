import React from "react";
import SocialButton from "./SocialButton";

class Footer extends React.Component {
    render() {
        return (
            <footer id="main-footer">
                <div>
                    <h3>Interested in talking?</h3>
                    <SocialButton href="mailto:msosadesign@gmail.com" label="Send me an email" iconsrc="img/mail.svg" />
                    <SocialButton href="https://www.linkedin.com/in/msosadesign" label="Connect on LinkedIn" iconsrc="./img/linkedin.svg" />
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