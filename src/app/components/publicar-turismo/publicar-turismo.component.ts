import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicar-turismo',
  templateUrl: './publicar-turismo.component.html',
  styleUrls: ['./publicar-turismo.component.css']
})
export class PublicarTurismoComponent implements OnInit {

  paso = 1;
  url_video = null;
  otro_tipo = false;
  otro_tipo_txt = null;
  otros_servicios = null;
  otros_servicios_txt = null;
  servicio_continuo = false;

  tipos_turismo = [
    "Aventura",
    "Ecoturismo",
    "Museo",
    "Tour",
    "Otro"
  ];

  servicios_incluidos = [
    "Equipamento Adecuado",
    "Entrada",
    "Guía",
    "Hidratación",
    "Recorrido",
    "Refrigerio",
    "Seguro",
    "Transporte",
    "Otros"
  ];

  turismo = {
    "nombre": null,
    "descripcion": null,
    "direccion": null,
    "tipo": [],
    "fecha": null,
    "horario_apertura": null,
    "horario_cierre": null,
    "imagenes": [],
    "videos": [],
    "precio": null,
    "web": null,
    "facebook": null,
    "instagram": null,
    "twitter": null,
    "telefono": null,
    "incluye": [],
    "notas": null
  };

  constructor() { }

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
    if(id === 'select-tipo-plan')
    {
      this.turismo.tipo = instance.getSelectedValues();
      if (this.turismo.tipo.includes('Otro')) this.otro_tipo = true;
      else this.otro_tipo = false;
    }
    else if(id === 'select-servicios')
    {
      this.turismo.incluye = instance.getSelectedValues();
      if (this.turismo.incluye.includes('Otros')) this.otros_servicios = true;
      else this.otros_servicios = false;
    }
  }

  horarioApertura()
  {
    var instance = M.Timepicker.getInstance(document.getElementById('apertura'));
    this.turismo.horario_apertura = instance.time;
  }

  horarioCierre()
  {
    var instance = M.Timepicker.getInstance(document.getElementById('cierre'));
    this.turismo.horario_cierre = instance.time;
  }

  asignarFecha()
  {
    var instance = M.Datepicker.getInstance(document.getElementById('fecha'));
    this.turismo.fecha = instance.date;
  }

  resetTimepicker()
  {
    setTimeout(this.inicializarMaterialize, 0);
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

  agregarUrlVideo()
  {
    this.turismo.videos.push(this.url_video);
    this.url_video = null;
  }

  publicar()
  {
    if(this.otro_tipo) this.turismo.tipo.push(this.otro_tipo_txt);
    if(this.otros_servicios) this.turismo.incluye.push(this.otro_tipo_txt);
    console.log(this.turismo);
  }

}
