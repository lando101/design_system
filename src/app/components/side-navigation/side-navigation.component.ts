import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { $ } from 'protractor';
import { Tabs } from '../../models/tabs/tabs.model';
import { Routes, RouterModule, Router } from '@angular/router';
import {  DesignPageComponent } from '../../pages/design-page/design-page.component';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {
  visible = true;
  activeTab: Tabs;

  @Input() tabs: Tabs [];

  constructor(public router: Router) { }

  ngOnInit(): void {
    // DETERMINE ACTIVE TAB ON PAGE LOAD
    if (this.visible) {
      const tabIndex = this.tabs.findIndex(x => this.router.url === ('/authenticated/' + x.area + x.href));
      this.tabs[tabIndex].active = true;
    }
  }
  // SET TAB SELECTED TO ACTIVE AND REMOVE ACTIVE FROM OTHER TABS
  setActiveTab(tab: Tabs) {
    this.tabs.filter(x => x.active = false);
    tab.active = true;
  }
}
