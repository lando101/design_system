import { Component, OnInit } from '@angular/core';
import { moveIn } from '../../router.animations';

@Component({
  templateUrl: './design-system-page.component.html',
  styleUrls: ['./design-system-page.component.scss'],
  // animations: [moveIn()]
})
export class DesignSystemPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
