import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { Tabs } from '../../models/tabs/tabs.model';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {
  activeTab: Tabs;

  // DESING TOPICS
  designTabs: Tabs [] = [
    {id: 1, displayName: ' Overview', toolTip: '', display: true, order: 1, area: 'design', etc: '', href: '/design-overview',
    active: false, icon: ''},
    {id: 2, displayName: 'Color Palette', toolTip: 'test', display: true, order: 2, area: 'design', etc: '',
    href: '/color-palette', active: false, icon: 'fas fa-palette'},
    {id: 3, displayName: 'Icons', toolTip: 'test', display: true, order: 3, area: 'design', etc: '',
    href: '/icons', active: false, icon: 'fas fa-icons'},
    {id: 4, displayName: 'Typography', toolTip: 'test', display: true, order: 4, area: 'design', etc: '',
    href: '/typography', active: false, icon: 'fas fa-font'},
    // {id: 4, displayName: 'Forms', toolTip: 'test', display: true, order: 4, area: 'design', etc: '',
    // href: '/forms', active: false, icon: 'far fa-newspaper'},
    // {id: 5, displayName: 'Buttons', toolTip: 'test', display: true, order: 5, area: 'design', etc: '',
    // href: '/buttons', active: false, icon: 'fas fa-mouse'},
  ];

  // COMPONENT TOPICS
  componentTabs: Tabs[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    // DETERMINE ACTIVE TAB ON PAGE LOAD
    const tabIndex = this.designTabs.findIndex(x => this.router.url === ('/authenticated/' + x.area + x.href));
    this.designTabs[tabIndex].active = true;
  }


  // SET TAB SELECTED TO ACTIVE AND REMOVE ACTIVE FROM OTHER TABS
  setActiveTab(tab: Tabs) {
    this.designTabs.filter(x => x.active = false);
    tab.active = true;
  }
}
