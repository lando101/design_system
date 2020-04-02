import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './icons-page.component.html',
  styleUrls: ['./icons-page.component.scss'],
  styles: [':host { width: 100%; margin-bottom: 55px}']
})
export class IconsPageComponent implements OnInit {

  testArray: string[] = ['Hello', 'Good Bye'];

  constructor() { }

  ngOnInit(): void {
  }

}
