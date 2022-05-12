import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { SobrenosotrosComponent } from './sobrenosotros/sobrenosotros.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [

  {path:'',redirectTo: 'inicio',pathMatch:'full'},
      {path: '', redirectTo: 'inicio',pathMatch:'full'},
      {path: 'inicio', component: InicioComponent},
      {path: 'servicios', component: ServiciosComponent},
      {path: 'sobrenosotros', component: SobrenosotrosComponent},
      {path: 'novedades', component: NovedadesComponent},
      {path: 'contacto', component: ContactoComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
