import React, { useState } from 'react';
import './About.css';
import anterior from "../assets/img/anterior.png";
import siguiente from "../assets/img/siguiente.png";
import card3 from "../assets/img/card3.png";
import card2 from "../assets/img/card2.png";
import card1 from "../assets/img/card1.png";

const About = () => {
  const [tarjetaActualIndex, setTarjetaActualIndex] = useState(0);

  const tarjetas = [
    {
      imagen: card1,
      titulo: 'Conexiones Personales',
      contenido: 'Disfruto del tiempo con mis seres queridos, parte fundamental de mi vida. Por mi manera  de pensar intento encontrar la armonía entre la tecnología y las experiencias personales.'
    },
    {
      imagen: card2,
      titulo: 'Pasión Musical e Inspiración',
      contenido: 'Una de mis pasiones más fuertes es la música, una parte esencial de mi vida y una fuente inagotable de inspiración.'
    },
    {
      imagen: card3,
      titulo: 'Aventura sobre Ruedas',
      contenido: 'Me fascina cómo el viaje en carretera encarna la verdadera esencia de la aventura y la libertad'
    }
  ];

  const mostrarTarjetaAnterior = () => {
    setTarjetaActualIndex((prevIndex) => (prevIndex - 1 + tarjetas.length) % tarjetas.length);
  };

  const mostrarTarjetaSiguiente = () => {
    setTarjetaActualIndex((prevIndex) => (prevIndex + 1) % tarjetas.length);
  };

  return (
    <div id='about'>
      <div>
        <h3>Exploración Académica y Metas Cósmicas</h3>
        <p>
          Resido en Barcelona, ciudad en la que acabo de concluir mi viaje académico como Técnica Superior de Desarrollo Web. 
          Ahora, estoy lista para embarcar en una nueva aventura en el mundo laboral como programadora full-stack, 
          extendiendo las fronteras de mis habilidades como una nave espacial en el ciberespacio.
        </p>
        <p>
          Mi objetivo inmediato es poder incorporarme en un puesto de trabajo que me permita desplegar mis conocimientos 
          en desarrollo web tanto en el front-end como en el back-end, abordando proyectos tan desafiantes 
          como explorar planetas desconocidos.
        </p>
        <p>
          Mi trayecto no termina aquí, tengo la firme intención de seguir ampliando mis habilidades y conocimientos en programación, 
          explorando nuevas tecnologías y prácticas recomendadas en el desarrollo web, como un astronauta que nunca deja de explorar el espacio desconocido. 
          ¡El cosmos del desarrollo web me espera, y estoy lista para despegar hacia nuevas alturas!
        </p>
      </div>
      <div>
        <h3>Mi Impulso en el Espacio</h3>
        <p>
          Desde que era una niña, siempre me han fascinado los desafíos, los enigmas y las incógnitas. Pasaba horas tratando de resolver un cubo Rubik, 
          disfrutando de la satisfacción de por fin encontrar la solución.
        </p>
        <p>
          La idea de que la programación en sí misma es como un vasto cosmos de posibilidades infinitas para crear y resolver problemas 
          es lo que me impulsa a continuar en este emocionante viaje. Cada desafío en el mundo de la programación es como una nueva constelación 
          que espera ser descubierta y explorada. 
        </p>
      </div>
      <div>
        <h3>Mis Aventuras Personales</h3>
        <p>Cuando me desconecto de la pantalla, me enfoco en mi vida personal y aficiones.</p>
        <div className="mazo-cards row d-flex justify-content-center align-items-center">
          <button className="col-2 ctr" onClick={mostrarTarjetaAnterior}>
            <img src={anterior} alt="Mostrar tarjeta anterior" />
          </button>
          <div className="card col-8" id="targetaM" style={{ maxWidth: '50%' }}>
            <img className="card-img-top" src={tarjetas[tarjetaActualIndex].imagen} alt={tarjetas[tarjetaActualIndex].titulo} />
            <div className="card-body">
              <h5 className="card-title">{tarjetas[tarjetaActualIndex].titulo}</h5>
              <p className="card-text">{tarjetas[tarjetaActualIndex].contenido}</p>
            </div>
          </div>
          <button className="col-2 ctr" onClick={mostrarTarjetaSiguiente}>
            <img src={siguiente} alt="Mostrar tarjeta siguiente" />
          </button>
        </div>  
        <p className="frase">
          Estas facetas de mi vida se entrelazan para formar una imagen completa de quien soy
        </p>
      </div>      
    </div>
  );
}

export default About;
