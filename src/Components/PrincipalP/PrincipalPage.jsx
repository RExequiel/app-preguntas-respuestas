import React from 'react';
import style from './PrincipalPage.module.css';
import img from './cultura.png';
import {Link} from 'react-router-dom';


const PrincipalPage = () => {

    return ( 
        <>
        <div className={style.container}>
            <h1 className={style.titulo}>Cultura</h1>
            <img src={img} width='50%' alt="imagen" className={style.imagen} />
        </div>
        <div className={style.containerBotones}>
            <div>
                <Link to='/instrucciones' className={style.a}>Instrucciones</Link>
            </div>
            <br />
            <div>
                <Link to='/playing' className={style.a}>Jugar</Link>
            </div>
        </div>
        </>
     );
}
 
export default PrincipalPage;