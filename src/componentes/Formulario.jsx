import InputMetros from "./InputMetros"
import PropiedadesSelect from "./PropiedadesSelect"
import UbicacionSelect from "./UbicacionSelect"
import { useContext } from "react";
import { AppContext } from "../AppContext.jsx";

function Formulario() {
    const costoM2 = 35.86
    
    const { form } = useContext(AppContext);

    function cotizar(event){
        event.preventDefault();
        
        let metros = form.metros;
        let prop = form.selectedProp.tipo;
        let ubi = form.selectedUbi.tipo;

        let resul = metros * form.selectedProp.factor * form.selectedUbi.factor * costoM2;
        
        let hora = new Date().toLocaleString()
        
        imprimirPoliza(resul)

        guardarEnHistorial(hora, resul, prop, ubi, metros)
    }

    const guardarEnHistorial = (hora, resul, prop, ubi, metros)=> {
        const historialCotizaciones = JSON.parse(localStorage.getItem("historialCotizaciones")) || []

        const cotizacion = {
                            fecha: hora,
                            propiedad: prop,
                            ubicacion: ubi,
                            metros: metros,
                            poliza: resul.toFixed(2),
                            id: historialCotizaciones.length+1
                           }
        
              historialCotizaciones.push(cotizacion)
              localStorage.setItem("historialCotizaciones", JSON.stringify(historialCotizaciones))
    }

    const imprimirPoliza = (resul) => {
        let valorPoliza = document.getElementById('valorPoliza');
        valorPoliza.innerText = resul.toFixed(2);
    }

    return (
        <>
            <div className="container border rounded border-primary">
                <h2>Completa los datos solicitados</h2>
                <form className="d-flex flex-column align-items-center" onSubmit={cotizar}>

                    <PropiedadesSelect/>

                    <UbicacionSelect/>
                    
                    <InputMetros/>
                    <button className="btn btn-primary">Cotizar</button>
                </form>
                
                <p>Precio estimado: $ 
                    <span id="valorPoliza">0.00</span>
                </p>
            </div>
        </>
    )
}

export default Formulario