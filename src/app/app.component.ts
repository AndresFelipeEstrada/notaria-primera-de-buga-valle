import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./footer.css']
})
export class AppComponent {
  title = 'Notaria Primera De Buga Valle';


  constructor(private router:Router) {}

  Inicio(){
    this.router.navigate(["inicio"])
  }
  Servicios(){
    this.router.navigate(["servicios"])
  }
  SobreNosotros(){
    this.router.navigate(["sobrenosotros"])
  }
  Novedades(){
    this.router.navigate(["novedades"])
  }
  Contacto(){
    this.router.navigate(["contacto"])
  }
}


