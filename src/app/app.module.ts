import { NgModule } from '@angular/core';
import { NgImageSliderModule } from 'ng-image-slider';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';



//Modulos
import { AppRoutingModule } from './app-routing.module';
import { ContactoModule } from './contacto/contacto.module';
import { ServiciosModule } from './servicios/servicios.module';
import { InicioModule } from './inicio/inicio.module';
import { SobrenosotrosModule } from './sobrenosotros/sobrenosotros.module';
//import { NovedadesModule } from './novedades/novedades.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContactoModule,
    //NovedadesModule,
    ServiciosModule,
    SobrenosotrosModule,
    InicioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
