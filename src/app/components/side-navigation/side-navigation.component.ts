import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { Tabs } from '../../models/tabs/tabs.model';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {
  visible: boolean = true;

  tabs: Tabs [];

  constructor() { } 

  ngOnInit(): void 
  {
    
  }
  
  // SET TAB SELECTED TO ACTIVE AND REMOVE ACTIVE FROM OTHER TABS
  setActiveTab(tab: Tabs) {
    this.tabs.filter(x => x.active = false);
    tab.active = true;
  }
}
