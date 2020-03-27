<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../models/tabs/tabs.model';
import 'firebase/firestore';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
=======
import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { $ } from 'protractor';
import { Tabs } from '../../models/tabs/tabs.model';
import { Routes, RouterModule, Router } from '@angular/router';
// import {  DesignPageComponent } from '../../pages/design-page/design-page.component';
>>>>>>> landon-messmer-branch

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {
  @Input() tabs: Tabs [];
  visible = true;
  activeTab: Tabs;
<<<<<<< HEAD
  title: string;
  tabs: Tabs [];

  constructor(private router: Router, private ds: DataService) { 
    // Subscribe to the topic and tabs observables 
    ds.tabs.subscribe(updatedTabs => {
      this.tabs = updatedTabs;
    });

    ds.topic.subscribe(updatedTopic => {
      this.title = updatedTopic;
    })
  }

  ngOnInit(): void { }
  
  // Update the topic and tabs
  changeTopic(topic: string){   
    this.ds.ChangeTopic(topic);
  }

=======
  header: string;

  // tabs = [
  //   {id: 1, displayName: 'Overview', toolTip: 'test', display: true, order: 1, area: 'design', etc: '',
  //   href: '/design-overview', active: true, icon: ''},
  //   {id: 2, displayName: 'Color Palette', toolTip: 'test', display: true, order: 2, area: 'design', etc: '',
  //   href: '/color-palette', active: false, icon: 'fas fa-palette'},
  //   {id: 3, displayName: 'Icons', toolTip: 'test', display: true, order: 3, area: 'design', etc: '',
  //   href: '/icons', active: false, icon: 'far fa-icons'},
  //   {id: 3, displayName: 'Typography', toolTip: 'test', display: true, order: 3, area: 'design', etc: '',
  //   href: '/typography', active: false, icon: 'fas fa-font'},
  // ];

  constructor(public router: Router) { }

  ngOnInit(): void {
    // DETERMINE ACTIVE TAB ON PAGE LOAD
    // const tabIndex = this.tabs.findIndex(x => this.router.url === ('/authenticated/' + x.area + x.href));
    // this.tabs[tabIndex].active = true;
  }
>>>>>>> landon-messmer-branch
  // SET TAB SELECTED TO ACTIVE AND REMOVE ACTIVE FROM OTHER TABS
  setActiveTab(tab: Tabs) {
    // this.tabs.filter(x => x.active = false);
    this.tabs.map(c => c.active = false);
    tab.active = true;
    // this.header = tab.area;
  }
}
