import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  routerLinks: any[] = [
    {id: 1, displayName: 'Foundation', display: true, href: '/authenticated/foundation'},
    {id: 2, displayName: 'Content', display: true, href: '/authenticated//content'},
    {id: 3, displayName: 'Design', display: true, href: '/authenticated//design'},
    {id: 4, displayName: 'Components', display: true, href: '/authenticated//components'},
    {id: 5, displayName: 'Assets', display: true, href: '/authenticated//assets'}
  ];

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
