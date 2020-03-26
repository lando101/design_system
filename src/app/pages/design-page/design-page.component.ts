import { Component, OnInit, Input } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { SideNavigationComponent } from '../../components/side-navigation/side-navigation.component';

@Component({
  selector: 'app-design-page',
  templateUrl: './design-page.component.html',
  styleUrls: ['./design-page.component.scss']
})
export class DesignPageComponent implements OnInit {
  @Input() tabs: any[]; 
  constructor() {}
  // constructor(public nav: SideNavigationComponent) {
  //   // SHOW SIDE NAVE WITH DATA ABOVE
  //   this.nav.visible = true;
  //   nav.tabs = [
  //     {id: 1, displayName: 'Overview', toolTip: 'test', display: true, order: 1, area: 'design', etc: '',
  //     href: '/design-overview', active: false, icon: ''},
  //     {id: 2, displayName: 'Color Palette', toolTip: 'test', display: true, order: 2, area: 'design', etc: '',
  //     href: '/color-palette', active: true, icon: 'fas fa-palette'},
  //     {id: 3, displayName: 'Icons', toolTip: 'test', display: true, order: 3, area: 'design', etc: '',
  //     href: '/icons', active: false, icon: 'far fa-icons'},
  //     {id: 3, displayName: 'Typography', toolTip: 'test', display: true, order: 3, area: 'design', etc: '',
  //     href: '/typography', active: false, icon: 'fas fa-font'},
  //   ];
  // }

  ngOnInit(): void {
  }

}
