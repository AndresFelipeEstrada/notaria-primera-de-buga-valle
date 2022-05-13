import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations: [
    InicioComponent
  ],
    
  imports: [
    CommonModule,
    NgImageSliderModule,
  ],
  exports:[
   InicioComponent,
  ]
})
export class InicioModule { }
