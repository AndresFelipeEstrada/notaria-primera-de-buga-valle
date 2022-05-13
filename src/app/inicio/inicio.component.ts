import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imgCollection: Array<object> = [
    {
      image: '/assets/IMG.JPG',
      thumbImage: '/assets/IMG.JPG',
    }, {
      image: '/assets/IMG6.JPG',
      thumbImage: '/assets/IMG6.JPG',
    }, {
      image: '/assets/IMG2.JPG',
      thumbImage: '/assets/IMG2.JPG',
    }, {
      image: '/assets/IMG3.JPG',
      thumbImage: '/assets/IMG3.JPG',
    }, {
      image: '/assets/IMG4.JPG',
      thumbImage: '/assets/IMG4.JPG',
    }, {
      image: '/assets/IMG5.JPG',
      thumbImage: '/assets/IMG5.JPG',
    }
];
}
