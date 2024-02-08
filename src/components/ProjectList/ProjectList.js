import ProjectChip from "../ProjectChip/ProjectChip";
import "./ProjectList.css";
import projects from "../../projects.json";

export default function ProjectList() {
  return (
    <div className="project-list">
       {projects.map((project) => (
        <ProjectChip to={project.id} key={project.id} cover={project.cover} name={project.name} />
      ))}
    </div>
  );
}

