import { SideNavigationComponent } from 'src/app/components/side-navigation/side-navigation.component';
import { Component, OnInit, Input } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { SideNavigationComponent } from '../../components/side-navigation/side-navigation.component';

@Component({
  selector: 'app-design-page',
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
