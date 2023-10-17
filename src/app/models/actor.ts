import { Pais } from "./pais";
export class Actor{
    id?: number;
    nombre: string;
    apellido: string;
    edad: Number;
    pais_origen: Pais;

    constructor(nombre = '',apellido = '', edad = 0, pais : Pais | null = null) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.pais_origen = pais;
      }
}