import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { moveIn } from '../../router.animations';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  animations: [moveIn()],
})
export class LoginPageComponent implements OnInit {

  constructor(public authService: AuthService) { }
  ngOnInit(): void {
  }

}
