import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SobrenosotrosComponent } from './sobrenosotros/sobrenosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { InicioComponent } from './inicio/inicio.component';

//Modulos
import { AppRoutingModule } from './app-routing.module';
import { ContactoModule } from './contacto/contacto.module';


@NgModule({
  declarations: [
    AppComponent,
    SobrenosotrosComponent,
    ServiciosComponent,
    NovedadesComponent,
    InicioComponent,
    // ContactoComponent eliminar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContactoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
