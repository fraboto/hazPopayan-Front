import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publicar-lugar',
  templateUrl: './publicar-lugar.component.html',
  styleUrls: ['./publicar-lugar.component.css']
})
export class PublicarLugarComponent implements OnInit {

  tipo_lugar = null;
  paso = 0;

  subtipos_restaurante = [
    "Americana",
    "Árabe",
    "Colombiano",
    "Comida Rápida",
    "Fusión",
    "Helado y Postres",
    "Italiano",
    "Japonés",
    "Méxicano",
    "Oriental",
    "Parrilla",
    "Pescados y Mariscos",
    "Típico",
    "Vegetariano",
    "Otro"
  ];

  subtipos_discoteca = [
    "Crosssover",
    "Despecho",
    "Electrónica",
    "Rancheras",
    "Reggae",
    "Salsa",
    "Tropical",
    "Vallenato"
  ];

  subtipos_bar = [
    "Bohemio",
    "Crossover",
    "Despecho",
    "Electrónica",
    "Jazz/Blues",
    "Pop",
    "Rancheras",
    "Reggae",
    "Rock",
    "Salsa",
    "Tropical"
  ];

  precios_promedio = [
    {"texto": "5.000 - 10.000", "promedio":7500},
    {"texto": "10.000 - 20.000", "promedio":15000},
    {"texto": "20.000 - 30.000", "promedio":25000},
    {"texto": "30.000 - 45.000", "promedio":37500},
    {"texto": "45.000 - 60.000", "promedio":52500},
    {"texto": "60.000 - 80.000", "promedio":70000},
    {"texto": "80.000 - 100.000", "promedio":90000},
    {"texto": "Mayor a 100.000", "promedio": 120000}
  ];

  servicios = [
    "Aire Acondicionado",
    "Aire Libre",
    "Baño",
    "Domicilios",
    "Juegos Infantiles",
    "Mascotas Permitidas",
    "Pago Efectivo",
    "Pago Tarjeta de Crédito",
    "Pago Tarjeta Débito",
    "Parqueadero",
    "Reservas",
    "Seguridad Privada",
    "Shows en Vivo",
    "Terraza",
    "T.V",
    "WiFi"
  ];

  publicacion = {
    "nombre": null,
    "direccion": null,
    "descripcion": null,
    "tipo": null,
    "subtipo": null,
    "imagenes": [],
    "videos": [],
    "horario_apertura": null,
    "horario_cierre": null,
    "precio_promedio": null,
    "web": null,
    "facebook": null,
    "instagram": null,
    "twitter": null,
    "telefono": null,
    "servicios": [],
    "notas": null
  };

  url_video:string = null;

  constructor(private router:Router) { }

  ngOnInit() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.inicializarMaterialize();
  }

  inicializarMaterialize()
  {
    var elems_select = document.querySelectorAll('select');
    var instances_select = M.FormSelect.init(elems_select, {});

    var elems_timepicker = document.querySelectorAll('.timepicker');
    var instances_timepicker = M.Timepicker.init(elems_timepicker, {twelveHour: false});
  }

  cambiarTipoLugar(tipo)
  {
    this.tipo_lugar = tipo;
    this.publicacion.tipo = tipo;
    this.paso = 1;
    setTimeout(this.inicializarMaterialize, 1);
  }

  valoresSelect(id)
  {
    let materialize_select = document.querySelector('#'+id);
    var instance = M.FormSelect.getInstance(materialize_select);
    if(id === 'select-subtipo') this.publicacion.subtipo = instance.getSelectedValues();
    else if(id === 'select-servicios') this.publicacion.servicios = instance.getSelectedValues();
  }

  siguientePaso()
  {
    this.paso++;
    setTimeout(this.inicializarMaterialize, 1);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  anteriorPaso()
  {
    if (this.paso === 1)
    {
      this.tipo_lugar = null;
      setTimeout(this.inicializarMaterialize, 1);
    } 
    else
    {
      this.paso--;
      setTimeout(this.inicializarMaterialize, 1);
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  horarioApertura()
  {
    var instance = M.Timepicker.getInstance(document.getElementById('apertura'));
    this.publicacion.horario_apertura = instance.time;
  }

  horarioCierre()
  {
    var instance = M.Timepicker.getInstance(document.getElementById('cierre'));
    this.publicacion.horario_cierre = instance.time;
  }

  confirmacionCancelar()
  {
    let confirmacion = confirm('¿Seguro que desea cancelar la publicación? Los datos ingresados se perderán');
    if (confirmacion) this.router.navigate(['/']);
  }

  agregarUrlVideo()
  {
    this.publicacion.videos.push(this.url_video);
    this.url_video = null;
  }

  publicar()
  {
    console.log(this.publicacion);
  }

}
