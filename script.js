import Persona from "./persona.js";

const flecha = (parametroUno, ...parametros) => {
    console.log(parametros);
}

function clasica(...parametrosClasica){
    console.log(parametrosClasica);
    
}

flecha(1, 2, 4, 5);
clasica(1, 2, 4, 5);

const crearPersona = (...rest) => {
    const persona = {
        nombre: rest[0],
        apellido: rest[1],
        edad: rest[2],
        vivo: rest[3],
        estadoCivil: rest[4]
    }
    console.log(persona);
    
}

const crearPersonaPOO = (...rest) => {
    const persona = new Persona(rest[0], rest[1], rest[2], rest[3], rest[4]);
    console.log(persona);
    
}

crearPersona('marcos', 'apellido', 34, true, false);
crearPersonaPOO('marcos', 'apellido', 34, true, false);


const crearPersonaObjetosClaves = (nombre, apellido, edad) => {
    const persona = {
        nombre,
        apellido,
        edad
    }
    return persona;
}

console.log(crearPersonaObjetosClaves('Nombre persona', 'Apellido persona', 30));

const jugandoConRest = (...rest) => {
    console.log(rest);
    rest.push('otro');
    console.log(rest);
}

jugandoConRest('Hola', 'Adios');



