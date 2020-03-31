import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { DesignOverviewComponent } from './design-overview/design-overview.component';
// import { FooterComponent } from './footer/footer.component';


@NgModule({
    imports: [
      CommonModule,
      SharedModule,
      RouterModule,
      // FooterComponent
      // FontAwesomeModule,

    ],
    declarations: [
      HeaderComponent,
      SideNavigationComponent,
      DesignOverviewComponent,
      // FooterComponent
    ],
    exports: [
      HeaderComponent,
      SideNavigationComponent,
      DesignOverviewComponent,
      // FooterComponent
    ],
    providers: [],
    entryComponents: []
  })

  export class ComponentsModule { }

