import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicar-evento',
  templateUrl: './publicar-evento.component.html',
  styleUrls: ['./publicar-evento.component.css']
})
export class PublicarEventoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
