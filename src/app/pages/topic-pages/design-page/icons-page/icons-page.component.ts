import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './icons-page.component.html',
  styleUrls: ['./icons-page.component.scss']
})
export class IconsPageComponent implements OnInit {

  testArray: string[] = ['Hello', 'Good Bye'];

  constructor() { }

  ngOnInit(): void {
  }

}
