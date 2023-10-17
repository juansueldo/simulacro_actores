export class Pais{
    img: string;
    nombre: string;
    idioma: string;
  static nombre: any;
  static img: any;
  static idioma: any;
    constructor(nombre :string = '', img :string = '') {
        this.nombre = nombre;
        this.img = img;
        this.idioma = 'Español';
    
      }
}