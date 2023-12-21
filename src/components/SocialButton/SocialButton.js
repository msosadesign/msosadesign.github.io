import "./SocialButton.css";

function SocialButton(props) {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className="cta-button card-style hidden show"
    >
      <img alt="Icon" src={props.iconsrc} />
      {props.label}
    </a>
  );
}

export default SocialButton;
