import { NavLink } from "react-router-dom";

export default function ProjectDisplay(props) {
    return (
        <NavLink to={props.to} className="project card-style hidden">
            <img
            src={props.cover}
            alt={`${props.name} cover`}
          />
          <div>
            <h3>{props.name}</h3>
            <p className="caption">{props.description}</p>
          </div>
        </NavLink>
    )
}