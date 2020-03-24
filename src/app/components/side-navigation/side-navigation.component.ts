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
  visible = true;
  activeTab: Tabs;

  tabs: Tabs [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    // DETERMINE ACTIVE TAB ON PAGE LOAD
    const tabIndex = this.tabs.findIndex(x => this.router.url === ('/authenticated/' + x.area + x.href));
    this.tabs[tabIndex].active = true;
  }
  // SET TAB SELECTED TO ACTIVE AND REMOVE ACTIVE FROM OTHER TABS
  setActiveTab(tab: Tabs) {
    this.tabs.filter(x => x.active = false);
    tab.active = true;
  }
}
