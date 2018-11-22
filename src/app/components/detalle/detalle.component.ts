import { LugaresService } from './../../services/lugares.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmbedVideoService } from 'ngx-embed-video';

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
  videos_carrusel = [];
  video_activo = 0;

  constructor(private lugaresService:LugaresService, private activatedRoute:ActivatedRoute, private embedService:EmbedVideoService) { }

  ngOnInit() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.id = this.activatedRoute.snapshot.params['id'];
    this.publicacion = this.lugaresService.getPublicationById(+this.id);
    if (this.publicacion.imagenes.length !== 0) this.carrusel_img = true;
    else this.carrusel_img = false;
    if (this.publicacion.videos.length !== 0)
    {
      this.carrusel_vid = true;
      this.videos_carrusel = this.publicacion.videos.map((video) => {return this.embedService.embed(video)});
      console.log(this.videos_carrusel);
    }
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

  siguienteVideo()
  {
    if (this.video_activo === this.videos_carrusel.length-1)
    {
      this.video_activo = 0;
    }
    else this.video_activo++;
  }

  anteriorVideo()
  {
    if (this.video_activo === 0)
    {
      this.video_activo = this.videos_carrusel.length-1;
    }
    else this.video_activo--;
  }

  siguienteImagen()
  {
    var elems_carousel = document.querySelectorAll('.carousel');
    var instances_carousel = M.Carousel.getInstance(elems_carousel[0]);
    instances_carousel.next();
  }

  anteriorImagen()
  {
    var elems_carousel = document.querySelectorAll('.carousel');
    var instances_carousel = M.Carousel.getInstance(elems_carousel[0]);
    instances_carousel.prev();
  }

}
