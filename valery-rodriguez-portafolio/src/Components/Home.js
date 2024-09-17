import React from "react";
import astronaut from "../assets/img/giphy.gif";
export default function Home(){
    return(<div id="contenedor" class="row d-flex justify-content-center">
        <h1 class="col-12 title">!Aterrizaje exitoso! <br></br> Soy Valery Rodriguez Desarrolladora Web FullStack</h1>
        <p class="">¡Embarca en una odisea digital intergaláctica! Soy una desarrolladora web fullstack y éste es mi portal estelar. Aquí, mis proyectos se convierten en constelaciones de código. ¡Explora las galaxias de mi creatividad y disfruta del viaje por la web!</p>
        <div id="astronaut" class="col-12 row d-flex justify-content-start">
            <img src={astronaut} alt=""></img>
        </div>
    </div>
    );
}