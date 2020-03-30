import { Component, OnInit } from '@angular/core';
import { SideNavigationComponent } from 'src/app/components/side-navigation/side-navigation.component';

@Component({
  selector: 'app-foundation-page',
  templateUrl: './foundation-page.component.html',
  styleUrls: ['./foundation-page.component.scss']
})
export class FoundationPageComponent implements OnInit {

  constructor(public nav: SideNavigationComponent) {
    nav.changeTopic('foundation');
  }

  ngOnInit(): void {
  }

}
