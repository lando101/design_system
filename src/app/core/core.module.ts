import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from './auth';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth/auth-routing.module';

// @NgModule({
//   imports: [BrowserAnimationsModule],
//   declarations: [AuthComponent]
// })


@NgModule({
  imports: [
    /* 3rd party libraries */
    CommonModule,
    AuthRoutingModule
  ],
  declarations: [],
  providers: [
    
    AuthGuard,
    AuthService,
    AuthComponent,

    ],
  exports: [
  ]
})


export class CoreModule {
  /* make sure CoreModule is imported only by one NgModule the AppModule */
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}