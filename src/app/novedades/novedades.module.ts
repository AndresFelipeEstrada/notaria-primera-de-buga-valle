import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovedadesComponent } from './novedades.component';

@NgModule({
  declarations: [
    NovedadesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NovedadesComponent
  ]
})
export class NovedadesModule { }
