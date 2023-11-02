export default function Certificate(props) {
    return (
        <a
            class="certificate card-style hidden"
            href={props.href}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div>
                <div>
                    <h3>{props.title}</h3>
                    <p>{props.school}</p>
                </div>
                <p class="caption">Issued {props.date}</p>
            </div>
            <img alt="External link icon" src="img/external-link.svg" />
        </a>
    )
}