import externalIcon from "../../img/home-img/external-link.svg"
import "./Certificate.css"

export default function Certificate(props) {
    return (
        <a
            className="certificate card-style hidden"
            href={props.href}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div>
                <div>
                    <h3>{props.title}</h3>
                    <p>{props.school}</p>
                </div>
                <p className="caption">Issued {props.date}</p>
            </div>
            <img alt="External link icon" src={externalIcon} />
        </a>
    )
}