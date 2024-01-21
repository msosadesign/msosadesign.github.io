import './App.css';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import Projects from './pages/Projects';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProjectArticle from './components/ProjectArticle/ProjectArticle';
import projects from "./projects.json"

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Home /> */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />}>

            {projects.map(project => (
              <Route key={project.id} path={project.id} element={<ProjectArticle href={project.article} />} />
            ))}

          </Route>
          <Route path='*' element={<h1>Not found</h1>} />
        </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
