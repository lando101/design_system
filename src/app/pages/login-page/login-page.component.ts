<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';

@Component({
=======
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login-page',
>>>>>>> login
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }
=======
  constructor(public authService: AuthService) { }
>>>>>>> login

  ngOnInit(): void {
  }

}
