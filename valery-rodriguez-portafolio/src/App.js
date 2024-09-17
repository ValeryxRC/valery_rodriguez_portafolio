import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import inicioIMG from "./assets/img/icons8-star-trek-espacio-profundo-nueve-96.png";
import sobreMeIMG from "./assets/img/icons8-astronauta-60.png";
import proyectosIMG from "./assets/img/icons8-cohete.png";
import miAporteIMG from "./assets/img/icons8-estrellas-96.png";

function App() {
  return (
    <Router>
      <div id='body' className="App">
        <nav>
          <div>
            <Link to="/">
              <img src={inicioIMG} alt="Inicio" />
              <h3>Inicio</h3>
            </Link>
          </div>
          <div>
            <Link to="/about">
              <img src={sobreMeIMG} alt="Sobre Mi" />
              <h3>Sobre Mi</h3>
            </Link>
          </div>
          <div>
            <Link to="/projects">
              <img src={proyectosIMG} alt="Proyectos" />
              <h3>Proyectos</h3>
            </Link>
          </div>
          <div>
            <Link to="/value">
              <img src={miAporteIMG} alt="Mi Aporte" />
              <h3>Mi Aporte</h3>
            </Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/value" element={<Value />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
