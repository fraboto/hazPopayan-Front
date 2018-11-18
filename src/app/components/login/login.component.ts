import { Usuario } from './../../interfaces/usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = true;
  user = {
    nombre: '',
    correo: ''
  }
  password: string = null;
  pass_confirmation: string = null;
  error_pass: boolean = false;
  
  constructor(private router:Router) { }

  ngOnInit() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    if(this.router.url === '/login/login')
    {
      this.login = true;
    }
    if(this.router.url === '/login/registrate')
    {
      this.login = false;
    }
  }

  actionRegister()
  {
    this.login = !this.login;
  }

}
