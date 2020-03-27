import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { moveIn } from 'src/app/router.animations';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({opacity: 1})),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({opacity: .3}),
        animate(300 )
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(600, style({opacity: 0})))
    ])
  ]
})
export class AuthComponent implements OnInit {
  loginStatus: Subscription;
  loginStatusState: boolean;
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    console.log("AUTH PAGE LOADED!!");
    this.loginStatus = this.authService.loginSuccess$.subscribe(
      data => {
        this.loginStatusState = data;
        console.log(this.loginStatusState + 'LOGIN STATUS');
        setTimeout(() => {
          this.loginStatusState = true;
        }, 800);
      }
    );
  }

}
