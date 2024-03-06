import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "./ProjectArticle.css"

const ProjectArticle = (props) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(props.href)
      .then((res) => res.text())
      .then((text) => setContent(text));
  });

  return (
    <article className="project-article">
      <base target="_blank" />
      <ReactMarkdown children={content} />
    </article>
  );
};

export default ProjectArticle;