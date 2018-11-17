export interface Lugar {
    id?: any;
    nombre: String;
    direccion: String;
    descripcion: String;
    tipo: String;
    subtipo: String;
    imagenes?: String[];
    videos?: String[];
    horario: Date[];
    puntuacion?: number;
    precio_promedio?: number;
    web?: String;
    facebook?: String;
    instagram?: String;
    twitter?: String;
    telefono?: String;
    servicios: String[];
    creacion: Date;
    actualizacion?: Date;
    lugar_ID: any;
}
