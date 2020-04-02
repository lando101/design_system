import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-embrace-accessibility-page',
  templateUrl: './embrace-accessibility-page.component.html',
  styleUrls: ['./embrace-accessibility-page.component.scss'],
  styles: [':host { width: 100%;}']
})
export class EmbraceAccessibilityPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
