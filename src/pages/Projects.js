import { Navigate, Outlet } from "react-router-dom";
// import Chip from "../components/Chip/Chip";
import Navigation from "../components/Navigation/Navigation";
import ProjectList from "../components/ProjectList/ProjectList";
import Footer from "../components/Footer/Footer";

export default function Projects() {
  return (
    <main className="wrapper projects-page">
      <Navigation />
      <header className="projects-header">
        <h1>Here are some of my projects</h1>
        <p>Filter by UI Design or Frontend!</p>
      </header>
      <div className="projects-content">
        <div className="projects-sidebar">
          {/* <div className="project-filters">
            <Chip label="UI Design" />
            <Chip label="Frontend Development" />
          </div> */}
          <ProjectList />
        </div>
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}
