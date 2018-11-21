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
  carrusel_img = false;
  carrusel_vid = false;

  constructor(private lugaresService:LugaresService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.id = this.activatedRoute.snapshot.params['id'];
    this.publicacion = this.lugaresService.getPublicationById(+this.id);
    if (this.publicacion.imagenes.length !== 0) this.carrusel_img = true;
    else this.carrusel_img = false;
    if (this.publicacion.videos.length !== 0) this.carrusel_vid = true;
    else this.carrusel_vid = false;
    setTimeout(this.inicializarMaterialize,1000);
  }

  inicializarMaterialize()
  {
    var elems_tabs = document.querySelectorAll('.tabs');
    var instances_tabs = M.Tabs.init(elems_tabs, {});

    var elems_carousel = document.querySelectorAll('.carousel');
    var instances_carousel = M.Carousel.init(elems_carousel, {fullWidth:true, indicators: true});
  }

}
