import "./Navigation.css";
import NavigationButton from "./NavigationButton";

export default function Navigation() {
  return (
    <nav className="main-nav">
      <NavigationButton label="Home" />
      <NavigationButton label="Projects" />
    </nav>
  );
}
