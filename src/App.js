import './App.css';
import Home from './pages/Home';
// import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Projects from './pages/Projects';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Home /> */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
