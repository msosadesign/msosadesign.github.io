import { NavLink } from "react-router-dom";
import "./Navigation.css";
// import NavigationButton from "./NavigationButton";

export default function Navigation() {
  return (
    <nav className="main-nav">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "navigation-button navigation-active" : "navigation-button"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/projects/"
        className={({ isActive }) =>
          isActive ? "navigation-button navigation-active" : "navigation-button"
        }
      >
        Projects
      </NavLink>
    </nav>
  );
}
