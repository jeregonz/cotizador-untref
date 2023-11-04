import * as React from "react";
import { Link } from "react-router-dom";
import Formulario from "./componentes/Formulario";

function Inicio () {
    
    return (
        <>
            <h1>Seguros del hogar</h1>
            <Formulario/>
            <Link to={"historial"}>
                <button class="btn btn-dark">
                    Ver el historial
                </button>
            </Link>
        </>
    )
}

export default Inicio