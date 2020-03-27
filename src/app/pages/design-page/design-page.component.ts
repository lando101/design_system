<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { SideNavigationComponent } from 'src/app/components/side-navigation/side-navigation.component';
=======
import { Component, OnInit, Input } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { SideNavigationComponent } from '../../components/side-navigation/side-navigation.component';
>>>>>>> landon-messmer-branch

@Component({
  selector: 'app-design-page',
  templateUrl: './design-page.component.html',
  styleUrls: ['./design-page.component.scss']
})
export class DesignPageComponent implements OnInit {
<<<<<<< HEAD

  constructor(public nav: SideNavigationComponent) { 
    nav.visible = true;    
    nav.changeTopic("design");
  }
=======
  contentType: string = "overview"
  constructor() {}
>>>>>>> landon-messmer-branch

  ngOnInit(): void {

  }

}
