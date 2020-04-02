import { Component, OnInit } from '@angular/core';
import { SideNavigationComponent } from 'src/app/components/side-navigation/side-navigation.component';

@Component({
  selector: 'app-components-page',
  templateUrl: './components-page.component.html',
  styleUrls: ['./components-page.component.scss'],
  styles: [':host { width: 100%; margin-bottom: 55px}']
})
export class ComponentsPageComponent implements OnInit {

  constructor(public nav: SideNavigationComponent) {
    nav.changeTopic("components");
   }

  ngOnInit(): void {
  }

}
