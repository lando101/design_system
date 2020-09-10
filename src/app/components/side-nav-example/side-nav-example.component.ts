import { Component, OnInit, Input } from '@angular/core';
import { SideNav } from 'src/app/models/sidenav.model';

@Component({
  selector: 'app-side-nav-example',
  templateUrl: './side-nav-example.component.html',
  styleUrls: ['./side-nav-example.component.scss']
})
export class SideNavExampleComponent implements OnInit {
  @Input() sideNavData: SideNav;
  constructor() { }

  ngOnInit(): void {
    console.log(this.sideNavData);
    console.log('Side nav got the data');
  }

}
