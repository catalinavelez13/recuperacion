import React from "react";
import Spotify from "../assets/Spotify.png";
import YouTube from "../assets/Youtube.png";
import autos1 from "../assets/autos2.png";
import autos2 from "../assets/Autos.png";


const Trabajos = () => {
    return (
        <div>
            <table className="tabla">
                <tr>
                    <td>
                        <div>
                            <img className='fotos' src={Spotify} alt='Spotify'></img>
                        </div>
                    </td>
                    <td>
                        <h2 className="titulo2">Spotify</h2>
                        <p className="introduccion">En la clase como saberes previos, la profesora Daniela nos idico hacer una pagina en HTML inspirados en Spotify, este fue mi trabajo realizado, basado en mi cantante favorito y mis canciones favoritas.</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h2 className="titulo2">YouTube</h2>
                        <p className="introduccion">En el segundo Trimestre, en Diseño web, el profesor Nitch nos puso una actividad en la que debiamos hacer una pagina web inspirados en lo que desearamos, mi idea fue basarme en Youtube y este fue mi resultado.</p>
                    </td> 
                    <td>
                        <div>
                            <img className='fotos' src={YouTube} alt='Spotify'></img>
                        </div>
                    </td>  
                </tr>
                <tr>
                    <td>
                        <div>
                            <img className='foto' src={autos1} alt='Autos1'></img>
                        </div>
                        <div>
                            <img className="fotos" src={autos2} alt="Autos2"></img>
                        </div>
                    </td> 
                    <td>
                        <h2 className="titulo2">Pagina de autos</h2>
                        <p className="introduccion">En este trimestre, en programacion avanzada, desarrollamos un proyecto en JAVA sobre una compañia de autos, conectamos tambien a una base de datos y la pagina ahora funciona a la perfeccion, cuenta con un login, un signup, se puede registrar los tipos de autos, las marcas, conductores, etc.</p>
                    </td>  
                </tr>
            </table>

        </div>
    )
}

export default Trabajos;