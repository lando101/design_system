import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SideNavigationComponent } from '../../components/side-navigation/side-navigation.component';

@Component({
  templateUrl: './design-page.component.html',
  styleUrls: ['./design-page.component.scss']
})
export class DesignPageComponent implements OnInit {

  constructor(public nav: SideNavigationComponent) {
    // SHOW SIDE NAVE WITH DATA ABOVE
    this.nav.visible = true;
    nav.tabs = [
      {id: 2, displayName: 'Color Palette', toolTip: 'test', display: true, order: 2, area: 'design', etc: '',
      href: '/color-palette', active: true, icon: 'fas fa-palette'},
      {id: 3, displayName: 'Typography', toolTip: 'test', display: true, order: 3, area: 'design', etc: '',
      href: '/typography', active: false, icon: 'fas fa-font'},
      {id: 4, displayName: 'Forms', toolTip: 'test', display: true, order: 4, area: 'design', etc: '',
      href: '/forms', active: false, icon: 'far fa-newspaper'},
      {id: 5, displayName: 'Buttons', toolTip: 'test', display: true, order: 5, area: 'design', etc: '',
      href: '/buttons', active: false, icon: 'fas fa-mouse'},
    ];
  }

  ngOnInit(): void {
  }

}
