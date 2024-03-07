import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import { Route, Routes } from 'react-router-dom';
import ProjectArticle from './components/ProjectArticle/ProjectArticle';
import projects from "./projects.json"
import Error404 from './pages/Error404';

let firstProject = projects[0].article;

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />}>
          <Route path='/projects/' element={<ProjectArticle href={firstProject} />} />

          {projects.map(project => (
            <Route key={project.id} path={project.id} element={<ProjectArticle href={project.article} />} />
          ))}

        </Route>
        <Route path='*' element={<Error404 />} />
      </Routes>

    </div>
  );
}

export default App;
