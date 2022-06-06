import React from 'react';
import { Link } from 'react-router-dom';
import style from './Instrucciones.module.css';


const Instrucciones = () => {
    return ( 
        <>
            <div className={style.container}>
                <h1 className={style.titulo}>Instrucciones</h1>
                <ul className={style.items}>
                    <li>El juego consiste en preguntas y respuestas multiple choice sobre cultura general</li><br/>
                    <li>Las preguntas són de temas relacionados a naturaleza, cultura, arte, deportes y viajes</li><br/>
                    <li>Las preguntas de los diferentes temas aparecerán aleatoreamente</li><br/>
                    <li>El tiempo por pregunta es de 20 segundos</li><br/>
                    <li>Los puntos aumentán cuando se acierta en la respuesta correcta, No disminuyen cuándo no se acierta</li><br/>
                    <li>La cantidad de vidas es de 5</li><br/>
                    <li>El juego tiene voz de aviso y sonido: al momento de acertar o errar a la pregunta y perder el juego, respectivamente</li>
                </ul>
            </div>
            <div className={style.buttonContainer}>
                <Link to='/playing' className={style.a}>Jugar</Link>
            </div>
        </> 
    );
}
 
export default Instrucciones;