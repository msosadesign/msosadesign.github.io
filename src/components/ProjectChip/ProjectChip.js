import "./ProjectChip.css";

export default function ProjectChip(props) {
  return (
    <div className="project-chip">
      <img
        src={props.cover}
        alt={`${props.name} cover`}
      />
      <div>{props.name} App</div>
    </div>
  );
}
