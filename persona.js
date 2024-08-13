export default class Persona{

    #nombre;
    #apellido;
    #edad;
    #vivo;
    #estadoCivil;

    constructor(nombre, apellido, edad, vivo, estadoCivil){
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#edad = edad;
        this.#vivo = vivo;
        this.#estadoCivil = estadoCivil
    }

}