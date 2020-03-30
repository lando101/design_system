import 'firebase/firestore';
import { DataService } from 'src/app/services/data.service';
import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { $ } from 'protractor';
import { Tabs } from '../../models/tabs/tabs.model';
import { Routes, RouterModule, Router, RouterOutlet } from '@angular/router';
// import {  DesignPageComponent } from '../../pages/design-page/design-page.component';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {
  // @Input() tabs: Tabs [];
  visible = true;
  activeTab: Tabs;
  title: string;
  tabs: Tabs [];

  constructor(private router: Router, private ds: DataService) {
    // Subscribe to the topic and tabs observables

  }

  ngOnInit(): void {
    this.ds.tabs.subscribe(updatedTabs => {
      this.tabs = updatedTabs;
    });

    this.ds.topic.subscribe(updatedTopic => {
      this.title = updatedTopic;
    })
  }

  // Update the topic and tabs
  changeTopic(topic: string){
    this.ds.ChangeTopic(topic);
  }

  // SET TAB SELECTED TO ACTIVE AND REMOVE ACTIVE FROM OTHER TABS
  setActiveTab(tab: Tabs) {
    // this.tabs.filter(x => x.active = false);
    this.tabs.map(c => c.active = false);
    tab.active = true;
    // this.header = tab.area;
  }
}
