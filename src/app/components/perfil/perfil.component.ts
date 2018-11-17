import { Usuario } from './../../interfaces/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario = {
      id: "0",
      nombre: "Francisco",
      username: "fraboto",
      email: "franciscobohorquezt@gmail.com",
      creacion: Date.now(),
      eventos: ["0"],
      lugares: ["0"]
  }

  lugares = [
    {
      id: "0",
      nombre: "Luna Roja",
      tipo: "Restaurante",
      ubicacion: ["Carrera 6C #31N-110"],
      descripcion: "Lindo restaurante",
      publicador: "0"
    }
  ]

  eventos = [
    {
      id: "0",
      nombre: "Mago de Oz",
      tipo: "Concierto",
      ubicacion: ["Carrera 6C #31N-110"],
      descripcion: "Mago de Oz en Popayán",
      publicador: "0"
    }
  ]

  perfil: boolean = true;
  info: boolean = true;
  publicacion: string = "evento";

  constructor() { }

  ngOnInit() {
    this.inicializarMaterialize();
  }

  inicializarMaterialize()
  {
    /* tooltip */
    var elems_tooltip = document.querySelectorAll('.tooltipped');
    var instances_tooltip = M.Tooltip.init(elems_tooltip, {});
  }

  subirFoto()
  {
    
  }

}
