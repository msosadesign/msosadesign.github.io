import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import { Navigate, Route, Routes } from 'react-router-dom';
import ProjectArticle from './components/ProjectArticle/ProjectArticle';
import projects from "./projects.json"
import Error404 from './pages/Error404';

let firstProject = projects[0].id;

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />}>
          <Route index element={<Navigate to={firstProject} replace />} />

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
