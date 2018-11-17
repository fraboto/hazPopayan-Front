export interface Turismo {
    id?: any;
    nombre: String;
    descripcion: String;
    tipo: String;
    modalidad: boolean;
    fecha?: Date;
    horario?: String;
    imagenes?: String[];
    videos?: String[];
    lugar?: String;
    precio?: number;
    web?: String;
    facebook?: String;
    instagram?: String;
    twitter?: String;
    telefono?: String;
    incluye: String[];
    creacion: Date;
    actualizacion?: Date;
}
