import { LugaresService } from './../../services/lugares.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  publicacion = null;
  id = null;

  constructor(private lugaresService:LugaresService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.id = this.activatedRoute.snapshot.params['id'];
    this.publicacion = this.lugaresService.getPublicationById(+this.id);
    this.inicializarMaterialize();
  }

  inicializarMaterialize()
  {
    var elems_tabs = document.querySelectorAll('.tabs');
    var instance = M.Tabs.init(elems_tabs, {});

    /* var elems_carousel = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems_carousel, {fullWidth: true, indicators: true, dist: 0}); */
  }

}
