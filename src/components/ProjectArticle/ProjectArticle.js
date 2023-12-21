import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "./ProjectArticle.css"

const ProjectArticle = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("./projects/project-example.md") 
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <article className="project-article">
      <ReactMarkdown children={content} />
    </article>
  );
};

export default ProjectArticle;