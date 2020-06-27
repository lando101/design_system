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
      'filter': 'blur(0px)'
  };

this.myParams = {
      particles: {
          number: {
              value: 100,
          },
          color: {
              value: ['#005581', '#de632d', '#0085ca', '#ffb140']
          },
          shape: {
              type: 'circle',
          },
          opacity: {
            value: 0.6,
            random: false,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
              value: 5,
          },
          line_linked: {
            color: '#cfcfcf',
          },
          move: {
            speed: .47,
            direction: 'top'
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
  //         size: 1,
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
