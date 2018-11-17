export interface Publicacion {
    key: any;
    tipo: string;
    nombre: string;
    ubicacion: string[];
    descripcion: string;
    publicador: any;
    subtipo?: string;
    imagenes?: string[];
    videos?: string[];
    comentarios?: object[];
    puntuacion?: number[];
    /* eventos */
    fecha?: Date;
    hora?: string;
    boleteria?: any;
    /* Restaurantes */
    precio_promedio?: number;
    servicios?: string[];
}
