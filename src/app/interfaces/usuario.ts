export interface Usuario {
    nombre: String;
    username: String;
    email: String;
    creacion: number;
    id?: any;
    apellido?: String;
    facebook?: String;
    instagram?: String;
    twitter?: String;
    info?: String;
    foto?: String;
    actualizacion?: Date;
    eventos?: any[];
    lugares?: any[];
    turismos?: any[];
}
