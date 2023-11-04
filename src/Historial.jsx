import * as React from "react";
import { Link } from "react-router-dom";
import Tabla from "./componentes/Tabla";

function Historial() {

    return (
        <>
            <h1>Historial</h1>
            <Tabla />
            <Link to={"/"}>
                <button className="btn btn-dark">
                    Volver al inicio
                </button>
            </Link>
        </>
    )
}

export default Historial