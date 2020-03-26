import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
      CommonModule,
      SharedModule,
      RouterModule
      // FontAwesomeModule,
      
    ],
    declarations: [
      HeaderComponent,
      SideNavigationComponent
    ],
    exports: [
      HeaderComponent,
      SideNavigationComponent
    ],
    providers: [],
    entryComponents: []
  })

  export class ComponentsModule { }
  
