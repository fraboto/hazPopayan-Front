import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  window_scroll:boolean = false;

  constructor(private router:Router) { 
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 320 || document.documentElement.scrollTop > 320) {
        this.window_scroll = true;
      } else {
        this.window_scroll = false;
      }
    });
  }
}
