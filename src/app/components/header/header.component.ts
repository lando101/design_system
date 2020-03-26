import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  displaySidebar = false;
  activeSibebarTabs: any[];

  routerLinks: any[] = [
    {id: 1, displayName: 'Home', display: true, href: '/home'},
    {id: 2, displayName: 'Foundation', display: true, href: '/foundation'},
    // {id: 3, displayName: 'Content', display: true, href: '/authenticated//content'},
    {id: 4, displayName: 'Design', display: true, href: '/design'},
    {id: 5, displayName: 'Components', display: true, href: '/components'},
    {id: 6, displayName: 'Assets', display: true, href: '/assets'}
  ];

    sideTabs = [
      {id: 1, displayName: 'Overview', toolTip: 'test', display: true, order: 1, area: 'design', etc: '',
      href: '/design-overview', active: true, icon: ''},
      {id: 2, displayName: 'Color Palette', toolTip: 'test', display: true, order: 2, area: 'design', etc: '',
      href: '/color-palette', active: false, icon: 'fas fa-palette'},
      {id: 3, displayName: 'Icons', toolTip: 'test', display: true, order: 3, area: 'design', etc: '',
      href: '/icons', active: false, icon: 'far fa-icons'},
      {id: 3, displayName: 'Typography', toolTip: 'test', display: true, order: 3, area: 'design', etc: '',
      href: '/typography', active: false, icon: 'fas fa-font'},
    ];

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  setSidebar(selectedItem: any) {
    console.log("my selected item");
    console.log(selectedItem);

    if (selectedItem.id !== 1) {
      this.displaySidebar = true;
    } else {
      this.displaySidebar = false;
    }

    this.activeSibebarTabs = this.sideTabs;
  }
}
