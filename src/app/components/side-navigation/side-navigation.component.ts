import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../models/tabs/tabs.model';
import 'firebase/firestore';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {
  visible: boolean = true;
  activeTab: Tabs;
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

  // SET TAB SELECTED TO ACTIVE AND REMOVE ACTIVE FROM OTHER TABS
  setActiveTab(tab: Tabs) {
    this.tabs.filter(x => x.active = false);
    tab.active = true;
  }
}
