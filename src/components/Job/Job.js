import "./Job.css"

export default function Job(props) {
    return (
        <article className="job delay hidden">
            <div>
                <h3>{props.company}</h3>
                <p>{props.role} • {props.schedule}</p>
            </div>
            <p>{props.period}</p>
        </article>
    )
}