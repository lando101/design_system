import { Component, OnInit } from '@angular/core';
import { SideNavigationComponent } from 'src/app/components/side-navigation/side-navigation.component';
import { Routes, RouterModule } from '@angular/router';


@Component({
  templateUrl: './accessibility-page.component.html',
  styleUrls: ['./accessibility-page.component.scss']
})
export class AccessibilityPageComponent implements OnInit {

  constructor(public nav: SideNavigationComponent) {
    nav.visible = true;
    nav.changeTopic("accessibility");
  }

  ngOnInit(): void {

  }

}
