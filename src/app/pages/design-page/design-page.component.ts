import { Component, OnInit } from '@angular/core';
import { SideNavigationComponent } from 'src/app/components/side-navigation/side-navigation.component';

@Component({
  templateUrl: './design-page.component.html',
  styleUrls: ['./design-page.component.scss']
})
export class DesignPageComponent implements OnInit {

  constructor(public nav: SideNavigationComponent) { 
    nav.visible = true;    
    nav.changeTopic("design");
  }

  ngOnInit(): void {
  }

}
