import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { DesignOverviewComponent } from './design-overview/design-overview.component';
import { BasicAppInfoComponent } from './basic-app-info/basic-app-info.component';
import { AppInfoReviewComponent } from './app-info-review/app-info-review.component';
import { AccessibilityTestComponent } from './accessibility-test/accessibility-test.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { RadioButtonsComponent } from './radio-buttons/radio-buttons.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { MenuExampleComponent } from './menu-example/menu-example.component';
import { MultiSelectExampleComponent } from './multi-select-example/multi-select-example.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { AccordionDefaultComponent } from './accordion-default/accordion-default.component';
// import { AlertsComponent } from './alerts/alerts.component';
// import { ParticlesSectionComponent } from './particles-section/particles-section.component';

// import { TableExampleComponent } from './table-example/table-example.component';
// import { NewAppAssessmentComponent } from './new-app-assessment/new-app-assessment.component';
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
      // MultiSelectExampleComponent,
      // MenuExampleComponent,
      // AutoCompleteComponent,
      // RadioButtonsComponent,
      // TextInputsComponent,
      // ParticlesSectionComponent,
      // TableExampleComponent,
      // ScrollTopComponent,
      // AddTestersComponent,
      // BasicAppInfoComponent,
      // NewAppAssessmentComponent,
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

