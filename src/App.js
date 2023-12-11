import './App.css';
import Home from './pages/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
