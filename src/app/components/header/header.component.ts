import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  routerLinks: any[] = [
    {id: 1, displayName: 'Foundation', display: true, href: '/foundation'},
    {id: 2, displayName: 'Content', display: true, href: '/content'},
    {id: 3, displayName: 'Design', display: true, href: '/design'},
    {id: 4, displayName: 'Components', display: true, href: '/components'},
    {id: 5, displayName: 'Assets', display: true, href: '/assets'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
