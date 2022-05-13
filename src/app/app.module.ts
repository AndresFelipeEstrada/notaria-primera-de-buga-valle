import { NgModule } from '@angular/core';
import { NgImageSliderModule } from 'ng-image-slider';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NovedadesComponent } from './novedades/novedades.component';


//Modulos
import { AppRoutingModule } from './app-routing.module';
import { ContactoModule } from './contacto/contacto.module';
import { ServiciosModule } from './servicios/servicios.module';
import { InicioModule } from './inicio/inicio.module';
import { SobrenosotrosModule } from './sobrenosotros/sobrenosotros.module';


@NgModule({
  declarations: [
    AppComponent,
    NovedadesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContactoModule,
    ServiciosModule,
    SobrenosotrosModule,
    InicioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
