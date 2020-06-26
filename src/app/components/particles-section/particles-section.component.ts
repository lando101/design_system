import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-particles-section',
  templateUrl: './particles-section.component.html',
  styleUrls: ['./particles-section.component.scss']
})
export class ParticlesSectionComponent implements OnInit {
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;
  constructor() { }

  ngOnInit(): void {
    this.myStyle = {
      // 'position': 'fixed',
      'width': '100%',
      'height': '605px',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
  };

this.myParams = {
      particles: {
          number: {
              value: 80,
          },
          color: {
              value: '#005581',
          },
          shape: {
              type: 'circle',
          },
          size: {
              value: 5,
          },
          line_linked: {
            color: '#dcdcdc',
          },
          move: {
            speed: 1,
          }
  }
};
  }

}
