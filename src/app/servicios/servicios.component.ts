import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) {}

  scrollToAutenticacion(){
    this.viewportScroller.scrollToAnchor('autenticacion')
  }

  scrollToEscrituracion(){
    this.viewportScroller.scrollToAnchor('escrituracion')
  }

  scrollToExtrajuicio(){
    this.viewportScroller.scrollToAnchor('extrajuicio')
  }

  scrollToRegistroCivil(){
    this.viewportScroller.scrollToAnchor('registrocivil')
  }

  scrollingTop() {
    this.viewportScroller.scrollToPosition([0 , 0]);
  }
  ngOnInit(): void {
  }

}
