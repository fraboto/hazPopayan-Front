import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LugaresService {

  publicaciones :any[] = [
    {
      "id": 0,
      "categoria": "evento",
      "nombre": "Concierto de Mago de Oz",
      "direccion": "Plaza de toros Popayán",
      "descripcion": "Gran concierto de Mago de Oz por su gira de 30 años",
      "tipo": "Concierto",
      "imagenes": ["https://bit.ly/2S4CSzY"],
      "videos": ["https://www.youtube.com/watch?v=JV8-fFpMnsk"],
      "hora": "20:00",
      "fecha": new Date(),
      "precio_boleteria": 50000,
      "boleteria": "Sandsoccer, Pedro Parrila",
      "web": "www.magodeozenpopayan.com",
      "facebook": "mago de oz",
      "instagram": "mago de oz",
      "twitter": "mago de oz",
      "telefono": 8367403,
      "lugar_id": null,
      "notas": "A este evento solo pueden asistir mayores de edad."
    },
    {
      "id": 1,
      "categoria": "lugar",
      "nombre": "El ocaso",
      "direccion": "Carrera 6C # 31N-110",
      "descripcion": "Gran restaurante",
      "tipo": "Restaurante",
      "subtipo": ["Típico"],
      "imagenes": ["https://media-cdn.tripadvisor.com/media/photo-s/0e/c5/b5/dc/restaurante-los-galenos.jpg", "https://hoteljaizkibel.com/wp-content/uploads/2018/09/restaurante-jaizkibel-1.jpg"],
      "videos": [],
      "horario_apertura": "10:00",
      "horario_cierre": "23:00",
      "precio_promedio": "40000 - 50000",
      "web": "www.elocaso.com",
      "facebook": null,
      "instagram": "@elocaso",
      "twitter": null,
      "telefono": 8367403,
      "servicios": ["Baño, Domicilio, Reservas, Shows en vivo"],
      "notas": null
    },
    {
      "id": 2,
      "categoria": "turismo",
      "nombre": "Tour por Popayán",
      "descripcion": "Hermoso tour por Popayán mostrando lo más característico de la ciudad blanca",
      "direccion": null,
      "tipo": ["Tour"],
      "fecha": new Date(),
      "horario_apertura": "15:30",
      "horario_cierre": null,
      "imagenes": [],
      "videos": ["https://www.youtube.com/watch?v=zbokauGV2b0"],
      "precio": "10000",
      "web": "www.popayantour.com",
      "facebook": null,
      "instagram": null,
      "twitter": null,
      "telefono": 8367403,
      "incluye": ["Guía"],
      "notas": "El recorrido durará 2 horas"
    }
  ];
  constructor() { }

  getPublicationById(id)
  {
    return this.publicaciones.find(publicacion => {
      return publicacion.id === id;
    })
  }
}
