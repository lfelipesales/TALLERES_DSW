export class serie {
    id: number;
    nombre: string;
    canal: string;
    temporadas: number;
    descripcion: string;
    URLserie: string;
    imagen: string;


    constructor(id: number, nombre: string, canal: string, temporadas: number, descripcion: string, URLserie: string, imagen: string) {
        this.id = id;
        this.nombre = nombre;
        this.canal = canal;
        this.temporadas = temporadas;
        this.descripcion = descripcion;
        this.URLserie = URLserie;
        this.imagen = imagen;
    }
}