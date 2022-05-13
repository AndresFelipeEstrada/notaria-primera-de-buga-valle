import { NgModule } from '@angular/core';
import { NgImageSliderModule } from 'ng-image-slider';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SobrenosotrosComponent } from './sobrenosotros/sobrenosotros.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { InicioComponent } from './inicio/inicio.component';


//Modulos
import { AppRoutingModule } from './app-routing.module';
import { ContactoModule } from './contacto/contacto.module';
import { ServiciosModule } from './servicios/servicios.module';


@NgModule({
  declarations: [
    AppComponent,
    SobrenosotrosComponent,
    NovedadesComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    NgImageSliderModule,
    AppRoutingModule,
    ContactoModule,
    ServiciosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
