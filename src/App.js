import './App.css';
import Home from './pages/Home';
// import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Projects from './pages/Projects';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProjectArticle from './components/ProjectArticle/ProjectArticle';
import ProjectList from './components/ProjectList/ProjectList';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Home /> */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />}>
            {/* <Route index element={<Projects />} /> */}
            <Route path='1' element={<ProjectArticle href="./projects/project-example.md" />} />
            <Route path='2' element={<ProjectArticle href="https://raw.githubusercontent.com/msosadesign/treehouse-project-6/master/README.md" />} />
            <Route path='3' element={<ProjectArticle href="https://raw.githubusercontent.com/msosadesign/treehouse-project-7/master/README.md" />} />
          </Route>
          <Route path='*' element={<h1>Not found</h1>} />
        </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
