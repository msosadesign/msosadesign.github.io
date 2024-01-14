export default function ProjectDisplay(props) {
    return (
        <article className="project card-style hidden">
            <img
            src={props.cover}
            alt={`${props.name} cover`}
          />
          <div>
            <h3>{props.name}</h3>
            <p className="caption">{props.description}</p>
          </div>
        </article>
    )
}