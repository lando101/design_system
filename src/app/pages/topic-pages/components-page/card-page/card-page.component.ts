import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.scss'],
  styles: [':host { width: 100%; margin-bottom: 55px}']
})
export class CardPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
