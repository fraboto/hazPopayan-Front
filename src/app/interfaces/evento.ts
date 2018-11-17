export interface Evento {
    id?: any;
    nombre: String;
    direccion: String;
    descripcion: String;
    tipo: String;
    imagenes?: String[];
    videos?: String[];
    hora: Date;
    boleteria?: String;
    web?: String;
    facebook?: String;
    instagram?: String;
    twitter?: String;
    telefono?: String;
    creacion: Date;
    actualizacion?: Date;
    lugar_ID: any;
}
