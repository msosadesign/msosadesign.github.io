import { NavLink } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  return (
    <nav className="main-nav">
      <NavLink
        to="/"
        className={"navigation-button"}
      >
        Home
      </NavLink>
      <NavLink
        to={`/projects`}
        className={"navigation-button"}
      >
        Projects
      </NavLink>
    </nav>
  );
}
