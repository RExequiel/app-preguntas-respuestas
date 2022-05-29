import React, { useState, useEffect } from 'react';
import style from './Playing.module.css';
import { Preguntas } from '../Helpers/BD.jsx';

const Playing = () => {

    const [aleatorio,setAleatorio] = useState(Math.round(Math.random()*100));
    const [tiempo,setTiempo] = useState(20);
    const [puntos,setPuntos] = useState(0);
    const [vidas,setVidas] = useState(5);
    const [clase,setClase] = useState([style.naturaleza, style.cultura, style.arte, style.deportes, style.viajes]);
    const [gameOver, setGameOver] = useState(null);

    useEffect(()=>{
        let cuentaAtras = setInterval(() => {
            tiempo > 0 ? setTiempo(tiempo -1) : setGameOver(window.location.href='gameover');
        }, 1000);
        return()=>clearInterval(cuentaAtras);
    },[tiempo, puntos]);

    const bien=()=>{
        speechSynthesis.speak(new SpeechSynthesisUtterance('¡¡¡RESPUESTA CORRECTA!!!'));
        setAleatorio(Math.round(Math.random()*100));
        setPuntos(puntos + 1);
        setTiempo(20);
    };
    const mal=()=>{
        speechSynthesis.speak(new SpeechSynthesisUtterance('¡¡¡RESPUESTA INCORRECTA!!!'));
        setAleatorio(Math.round(Math.random()*100));
        setVidas(vidas > 1 ? vidas - 1 : setGameOver(window.location.href='gameover'));
        setTiempo(20);
        
    };

    

    return ( 
        <>
            {Preguntas.map(preguntando=>(
                preguntando.id===aleatorio?
                    <>
                        <div className={style.countContainer}>
                            <h2>Tiempo: {tiempo}</h2>
                            <h2>Puntos: {puntos}</h2>
                            <h2>Vidas: {vidas}</h2>
                        </div>
                        <div className={preguntando.estilos==='naturaleza' ? clase[0] :
                                        preguntando.estilos==='cultura' ? clase[1] : 
                                        preguntando.estilos==='arte' ? clase[2] : 
                                        preguntando.estilos==='deportes' ? clase[3] : 
                                        preguntando.estilos==='viajes' ? clase[4] :
                                        clase[1] 
                                        }>
                        </div>
                        <div className={style.preguntaContainer}>
                            <h3>{preguntando.pregunta}</h3>
                        </div>
                        <div className={style.buttonContainer}>
                            <button className={style.boton} onClick={()=>preguntando.respuesta1===preguntando.solucion ? bien() : mal() }>{preguntando.respuesta1}</button>
                            <button className={style.boton} onClick={()=>preguntando.respuesta2===preguntando.solucion ? bien() : mal() }>{preguntando.respuesta2}</button>
                            <button className={style.boton} onClick={()=>preguntando.respuesta3===preguntando.solucion ? bien() : mal() }>{preguntando.respuesta3}</button>
                        </div>
                    </>
                :null
            ))}
        </>
     );
}
 
export default Playing;