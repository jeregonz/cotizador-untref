
function Tabla() {
    let historial = []

    const getHistorial = () => {
        const historialCotizaciones = JSON.parse(localStorage.getItem("historialCotizaciones")) || []

        historial = historialCotizaciones

        for (let i = 0; i < historial.length; i++) {
            console.log(historial[i])
        }
    }

    getHistorial()

    return (
        <>
            <div className="container border border-2 rounded border-primary">
                <table className="table table-hover mt-2">
                    <thead className="border-bottom border-primary">
                        <tr>
                            <th>Fecha de cotización</th>
                            <th>Propiedad</th>
                            <th>Ubicación</th>
                            <th>Metros cuadrados</th>
                            <th>Póliza mensual</th>
                        </tr>
                    </thead>
                    <tbody>
                        {historial.map((elemento) => (
                            <tr key={elemento.id}>
                                <td>{elemento.fecha}</td>
                                <td>{elemento.propiedad}</td>
                                <td>{elemento.ubicacion}</td>
                                <td>{elemento.metros}</td>
                                <td>{elemento.poliza}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </>
    )
}

export default Tabla