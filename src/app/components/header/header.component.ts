import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  routerLinks: any[] = [
    {id: 1, displayName: 'Home', display: true, href: '/home'},
    {id: 2, displayName: 'Foundation', display: true, href: '/foundation'},
    {id: 3, displayName: 'Content', display: true, href: '/content'},
    {id: 4, displayName: 'Design', display: true, href: '/design'},
    {id: 5, displayName: 'Components', display: true, href: '/components'},
    {id: 6, displayName: 'Assets', display: true, href: '/assets'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
