import { Component, OnInit, ViewChild, Injector } from '@angular/core';

import { Router,  } from '@angular/router';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {
  @ViewChild(HeaderComponent, {static: false})
  private headerComponent: HeaderComponent;

  public auth = this.injector.get(AuthService);
  
  constructor(private router: Router, private injector: Injector) { }

  ngOnInit() {
  }
}
