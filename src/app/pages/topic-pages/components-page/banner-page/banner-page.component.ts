import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-page',
  templateUrl: './banner-page.component.html',
  styleUrls: ['./banner-page.component.scss'],
  styles: [':host { width: 100%; margin-bottom: 55px}']
})
export class BannerPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
