import { Component, OnInit, HostListener } from '@angular/core';
import { SideNavigationComponent } from '../../components/side-navigation/side-navigation.component';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: []
})
export class HomeComponent implements OnInit {
  innerWidth: number;
  iconArray: any[] = [{icon: 'fas fa-fingerprint'}, {icon: 'fas fa-users'},
    {icon: 'fas fa-gavel'}, {icon: 'fas fa-map-marked-alt'}, {icon: 'fas fa-shield-alt'},
    {icon: 'fas fa-money-bill-wave'}, {icon: 'fas fa-clipboard-check'}
  ];

  iconBiggerArray: any[] = [{icon: ''}];

  constructor(public nav: SideNavigationComponent) {
    nav.visible = false;
  }
  @HostListener('window:resize', ['$event'])

  onResize(event) {
    this.innerWidth = window.innerWidth;
  }
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    for (let i = 0; i < (this.innerWidth / 5); i++) {
      this.iconBiggerArray.push(this.iconArray[Math.floor(Math.random() * this.iconArray.length)]);
    }
    console.log(this.iconBiggerArray);
   }
}
