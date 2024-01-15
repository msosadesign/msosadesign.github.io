import { Link } from "react-router-dom";
import ProjectChip from "../ProjectChip/ProjectChip";
import "./ProjectList.css";

export default function ProjectList() {
  return (
    <div className="project-list">
      <ProjectChip
        cover="https://nupec.com/wp-content/uploads/2021/02/Captura-de-pantalla-2021-02-08-a-las-13.59.48.png"
        name="Prototype of a Weather"
      />
      <ProjectChip
        cover="https://nupec.com/wp-content/uploads/2021/02/Captura-de-pantalla-2021-02-08-a-las-13.59.48.png"
        name="Sunshine Explorer"
      />
      <ProjectChip
        cover="https://nupec.com/wp-content/uploads/2021/02/Captura-de-pantalla-2021-02-08-a-las-13.59.48.png"
        name="Weather Wizardry"
      />
      {/* <Link to={"/projects"}>Projects</Link> */}
      <Link to={"/projects/1"}>Project 1</Link>
      <Link to={"/projects/2"}>Project 2</Link>
      <Link to={"/projects/3"}>Project 3</Link>
    </div>
  );
}
