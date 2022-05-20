import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './footer.css']
})
export class AppComponent {
  pageYoffset = 0;
  @HostListener('window:scroll', ['$event']) onScroll(){
    this.pageYoffset = window.pageYOffset;
  }
  title = 'NOTARÍA PRIMERA DE BUGA - VALLE';

  constructor(private router: Router, private scroll: ViewportScroller) { }

  Inicio() {
    this.router.navigate(["inicio"])
  }
  Servicios() {
    this.router.navigate(["servicios"])
  }
  SobreNosotros() {
    this.router.navigate(["sobrenosotros"])
  }
  Novedades() {
    this.router.navigate(["novedades"])
  }
  Contacto() {
    this.router.navigate(["contacto"])
  }
  scrollToTop(){
    this.scroll.scrollToPosition([0,0]);
  }
}


