import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publicar-evento',
  templateUrl: './publicar-evento.component.html',
  styleUrls: ['./publicar-evento.component.css']
})
export class PublicarEventoComponent implements OnInit {

  tipo_publicacion = null;
  paso = 1;

  evento = {
    "categoria": "evento",
    "nombre": null,
    "direccion": null,
    "descripcion": null,
    "tipo": null,
    "imagenes": [],
    "videos": [],
    "hora": null,
    "fecha": null,
    "precio_boleteria": null,
    "boleteria": null,
    "web": null,
    "facebook": null,
    "instagram": null,
    "twitter": null,
    "telefono": null,
    "lugar_id": null,
    "notas": null
  };

  tipos_evento = [
    "Arte",
    "Baile",
    "Concierto",
    "Cine",
    "Deporte",
    "Educación",
    "Exposición",
    "Feria",
    "Fiesta",
    "Música",
    "Taller",
    "Teatro",
    "Otro"
  ];

  usuario_lugares = [
    {"id": 0, "nombre": "El ocaso", "direccion": "Cra 6C #31N-110"},
    {"id": 1, "nombre": "Land Disco", "direccion": "Calle 29N #7-14"}
  ];

  url_video:string = null;

  constructor(private router:Router) { }

  ngOnInit() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    setTimeout(this.inicializarMaterialize, 5);
  }

  inicializarMaterialize()
  {
    var elems_select = document.querySelectorAll('select');
    var instances_select = M.FormSelect.init(elems_select, {});

    var elems_timepicker = document.querySelectorAll('.timepicker');
    var instances_timepicker = M.Timepicker.init(elems_timepicker, {twelveHour: false});

    var elems_datepicker = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems_datepicker, {});
  }

  valoresSelect(id)
  {
    let materialize_select = document.querySelector('#'+id);
    var instance = M.FormSelect.getInstance(materialize_select);
    if(id === 'lugar-usuario')
    {
      if (instance.getSelectedValues().length === 1)
      {
        this.evento.lugar_id = instance.getSelectedValues();
        this.evento.direccion = this.usuario_lugares.find((lugar) => { return lugar.id === +this.evento.lugar_id;}).direccion;
        document.getElementById('label-direccion').setAttribute('class', "active");
      }
      else
      {
        this.evento.lugar_id = null;
        this.evento.direccion = null;
        document.getElementById('label-direccion').removeAttribute('class');
      }
    }
    else if (id === 'select-tipo') this.evento.tipo = instance.getSelectedValues();
  }

  horario()
  {
    var instance = M.Timepicker.getInstance(document.getElementById('apertura'));
    this.evento.hora = instance.time;
  }

  asignarFecha()
  {
    var instance = M.Datepicker.getInstance(document.getElementById('fecha'));
    this.evento.fecha = instance.date;
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
    this.paso--;
    setTimeout(this.inicializarMaterialize, 1);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  confirmacionCancelar()
  {
    let confirmacion = confirm('¿Seguro que desea cancelar la publicación? Los datos ingresados se perderán');
    if (confirmacion) this.router.navigate(['/']);
  }


  publicar()
  {
    console.log(this.evento);
  }
}
