import { Component, OnInit, ViewChild, Injector, HostListener } from '@angular/core';

import { Router, RouterEvent, NavigationStart } from '@angular/router';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})



export class DefaultLayoutComponent implements OnInit {
  @ViewChild(HeaderComponent, {static: false})
  private headerComponent: HeaderComponent;
  displaySideBar = false;
  activeTabs: any[];

  public auth = this.injector.get(AuthService);

  constructor(public router: Router, private injector: Injector) {
   }


  ngOnInit() {

  }

  // THIS WILL AWLAYS BE TRUE B/C THE HEADER WILL ALWAYS HAVE SIDEBAR DATA? :: JUST HAVE THE COMPONENT CHECK IF ON HOMEPAGE?
  setSideBarData(tabModel: any[]) {
    this.activeTabs = tabModel;

    // if (this.activeTabs) {
    //       this.displaySideBar = true;
    // }
  }
}
