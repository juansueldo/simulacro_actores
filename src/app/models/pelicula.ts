export class Pelicula {
    id:number;
    nombre:string;
    tipo:string;
    fechaDeEstreno:Date;
    cantidadDePublico:number;
    fotoDePelicula:string;
    actor:string;

    constructor(id:number,nombre:string,tipo:string,fechaDeEstreno:Date,cantidadDePublico:number,fotoDePelicula:string,actor:string) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fechaDeEstreno = fechaDeEstreno;
        this.cantidadDePublico = cantidadDePublico;
        this.fotoDePelicula = fotoDePelicula;
        this.actor = actor;
    }
}