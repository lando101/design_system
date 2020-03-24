import { Component, OnInit } from '@angular/core';
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

  constructor(public nav: SideNavigationComponent) { 
    nav.visible = false;
  }

  ngOnInit(): void { }
}
