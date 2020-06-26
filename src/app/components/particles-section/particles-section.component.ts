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
            color: '#d1d1d1',
          },
          move: {
            speed: 1,
          }
  },
  interactivity: {
  //   events: {
  //     onhover: {
  //       enable: true,
  //       mode: "bubble"
  //     },
  //     modes: {
  //       // grab: {
  //       //   distance: 400,
  //       //   line_linked: {
  //       //     opacity: 1
  //       //   }
  //       // },
  //       bubble: {
  //         distance: 400,
  //         size: 8,
  //         duration: 2,
  //         opacity: 8,
  //         speed: 3
  //       },
  //     }
  // }
}
};
  }

}
