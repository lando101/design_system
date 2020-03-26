import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { moveIn } from 'src/app/router.animations';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  animations: [moveIn()],
})
export class AuthComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    console.log("AUTH PAGE LOADED!!");
  }

}
