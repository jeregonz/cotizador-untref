import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [form, setForm] = useState({});
    
    const [propiedades, setPropiedades] = useState([]);
    
    useEffect(() => {
        fetch("https://653831aaa543859d1bb14d53.mockapi.io/propiedades")
        .then((response) => response.json())
        .then((resul) => setPropiedades(resul));
    }, []);

    const [ubicaciones, setUbicaciones] = useState([]);

    useEffect(() => {
        fetch("https://653831aaa543859d1bb14d53.mockapi.io/ubicaciones")
        .then((response) => response.json())
        .then((resul) => setUbicaciones(resul));
    }, []);
    
    /*
    const [form, setForm] = useState({}); //para el formulario

    const [opciones, setOpciones] = useState([]); //para las tareas (todo 'opciones')
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
        .then((response) => response.json())
        .then((todos) => setOpciones(todos));
    }, []);

    const [usuarios, setUsuarios] = useState([]); //para los usuarios
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((users) => setUsuarios(users));
    }, []);

    const data = { opciones, form, setForm, usuarios };
    return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
    */

    const data = {propiedades, form, setForm, ubicaciones}

    return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
}