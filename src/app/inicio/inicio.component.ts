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
      image1: '/assets/IMG7.jpg',
      thumbImage: '/assets/IMG7.jpg',
    }, {
      image3: '/assets/IMG6.JPG',
      thumbImage: '/assets/IMG6.JPG',
    }, {
      image4: '/assets/IMG2.JPG',
      thumbImage: '/assets/IMG2.JPG',
    }, {
      image5: '/assets/IMG3.JPG',
      thumbImage: '/assets/IMG3.JPG',
    }, {
      image6: '/assets/IMG4.JPG',
      thumbImage: '/assets/IMG4.JPG',
    }, {
      image7: '/assets/IMG5.JPG',
      thumbImage: '/assets/IMG5.JPG',
    }
];
}
