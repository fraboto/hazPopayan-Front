import * as M from "materialize-css";
import { EmbedVideo } from 'ngx-embed-video';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PublicarComponent } from './components/publicar/publicar.component';
import { PublicarEventoComponent } from './components/publicar-evento/publicar-evento.component';
import { PublicarLugarComponent } from './components/publicar-lugar/publicar-lugar.component';
import { PublicarTurismoComponent } from './components/publicar-turismo/publicar-turismo.component';

const appRoutes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'perfil', component:PerfilComponent},
  {path: 'detalle/:id', component:DetalleComponent},
  {path: 'login/:action', component:LoginComponent},
  {path: 'publica', component:PublicarComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DetalleComponent,
    PerfilComponent,
    PublicarComponent,
    PublicarEventoComponent,
    PublicarLugarComponent,
    PublicarTurismoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    EmbedVideo.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
