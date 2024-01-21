import { NavLink } from "react-router-dom";
import "./ProjectChip.css";

export default function ProjectChip(props) {
  return (
    <NavLink
      to={`/projects/${props.to}`}
      className={({ isActive }) =>
        isActive ? "project-chip project-chip-selected" : "project-chip"
      }
    >
      <img src={props.cover} alt={`${props.name} cover`} />
      <p className="small-caption">{props.name}</p>
    </NavLink>
  );
}
