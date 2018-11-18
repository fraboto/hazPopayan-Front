import { Component, OnInit } from '@angular/core';
import * as M from "materialize-css";
import { Publicacion } from 'src/app/interfaces/publicacion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  eventos: Publicacion[] = [
    {
      key: 0,
      nombre: "Luna Roja",
      tipo: "Restaurante",
      ubicacion: ["Carrera 6C #31N-110"],
      descripcion: "Lindo restaurante",
      publicador: 0
    },
    {
      key: 1,
      nombre: "Mago de Oz",
      tipo: "Concierto",
      ubicacion: ["Carrera 6C #31N-110"],
      descripcion: "Mago de Oz en Popayán",
      publicador: 0
    },
    {
      key: 2,
      nombre: "Visita volcán Puracé",
      tipo: "Turismo",
      ubicacion: ["Carrera 6C #31N-110"],
      descripcion: "Paseo al volcán",
      publicador: 0
    }
  ];
  
  constructor(private router:Router) { }

  ngOnInit() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.inicializarMaterialize();
  }

  inicializarMaterialize()
  {
    /* Parallax */
      var elems_parallax = document.querySelectorAll('.parallax');
      var instances_parallax = M.Parallax.init(elems_parallax, {});

    /* tooltip */
      var elems_tooltip = document.querySelectorAll('.tooltipped');
      var instances_tooltip = M.Tooltip.init(elems_tooltip, {});
  }

  irPublicar()
  {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.router.navigate(['/publica']);
  }

}
