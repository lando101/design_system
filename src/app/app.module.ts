import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
// 3RD PARD IMPORTS
import { BsDropdownModule } from 'ngx-bootstrap';
import { NgModule, Injectable } from '@angular/core';
// 3RD PARD IMPORTS
import { HttpClientModule } from '@angular/common/http';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Ng2SearchPipeModule } from 'ng2-search-filter';
import { ResizableModule } from 'angular-resizable-element';
// import { ParticlesModule } from 'angular-particle';


// PROJECT COMPONENTS
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { SharedModule } from './shared/shared.module';
import { ComponentsModule } from './components/components.module';
import { AppWorkflowsComponent } from './components/app-workflows/app-workflows.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DesignPageComponent } from './pages/topic-pages/design-page/design-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DesignSystemPageComponent } from './pages/design-system-page/design-system-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { FoundationPageComponent } from './pages/topic-pages/foundation-page/foundation-page.component';
import { ComponentsPageComponent } from './pages/topic-pages/components-page/components-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { AccessibilityPageComponent } from './pages/topic-pages/accessibility-page/accessibility-page.component';
import { ColorPalettePageComponent } from './pages/topic-pages/design-page/color-palette-page/color-palette-page.component';
import { DesignOverviewPageComponent } from './pages/topic-pages/design-page/design-overview-page/design-overview-page.component';
import { TypographyPageComponent } from './pages/topic-pages/design-page/typography-page/typography-page.component';
import { AccordionPageComponent } from './pages/topic-pages/components-page/accordion-page/accordion-page.component';
import { AlertPageComponent } from './pages/topic-pages/components-page/alert-page/alert-page.component';
import { BannerPageComponent } from './pages/topic-pages/components-page/banner-page/banner-page.component';
import { FooterPageComponent } from './pages/topic-pages/components-page/footer-page/footer-page.component';
import { FormTemplatesComponent } from './pages/topic-pages/components-page/form-templates/form-templates.component';
import { GridPageComponent } from './pages/topic-pages/components-page/grid-page/grid-page.component';
import { SearchPageComponent } from './pages/topic-pages/components-page/search-page/search-page.component';
import { SideNavigationPageComponent } from './pages/topic-pages/components-page/side-navigation-page/side-navigation-page.component';
import { TablePageComponent } from './pages/topic-pages/components-page/table-page/table-page.component';
import { TagPageComponent } from './pages/topic-pages/components-page/tag-page/tag-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccessibilityOverviewPageComponent } from './pages/topic-pages/accessibility-page/accessibility-overview-page/accessibility-overview-page.component';
import { AccessibilityReqPageComponent } from './pages/topic-pages/accessibility-page/accessibility-req-page/accessibility-req-page.component';
import { AccessibilityAssessmentPageComponent } from './pages/topic-pages/accessibility-page/accessibility-assessment-page/accessibility-assessment-page.component';
import { NewAppAssessmentComponent } from './components/new-app-assessment/new-app-assessment.component';
import { BasicAppInfoComponent } from './components/basic-app-info/basic-app-info.component';
// import { AddTestersComponent } from './components/add-testers/add-testers.component';
import { UsersTypeAheadComponent } from './components/users-type-ahead/users-type-ahead.component';
import { ParticlesSectionComponent } from './components/particles-section/particles-section.component';


// SERVICES
import { AuthService } from './services/auth.service';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthComponent } from './core/auth';
import { DefaultLayoutComponent } from './layouts';
import { LayoutsModule } from './layouts/layouts.module';
import { IconsPageComponent } from './pages/topic-pages/design-page/icons-page/icons-page.component';
import { DataService } from './services/data.service';
import { AccessibilityComplianceService } from './services/accessibility-compliance-data.service';
import { AccessibilityComplianceAssessmentComponent } from './components/accessibility-compliance-assessment/accessibility-compliance-assessment.component';

// MATERIAL IMPORTS
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ValidationServiceService } from './services/validation-service.service';
import { AppInfoReviewComponent } from './components/app-info-review/app-info-review.component';
import { AccessibilityTestComponent } from './components/accessibility-test/accessibility-test.component';
import { ButtonsPageComponent } from './pages/topic-pages/components-page/buttons-page/buttons-page.component';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { EditableComponent } from './editable/editable/editable.component';
import { ViewModeDirective } from './editable/view-mode.directive';
import { EditModeDirective } from './editable/edit-mode.directive';
import { EditableOnEnterDirective } from './editable/edit-on-enter.directive';
import { TableExampleComponent } from './components/table-example/table-example.component';
import { FocusableDirective } from './directives/focusable.directive';
import { TableDataService } from './services/table-data.service';
import { ListenPageComponent } from './pages/topic-pages/foundation-page/listen-page/listen-page.component';
import { ContinuityPageComponent } from './pages/topic-pages/foundation-page/continuity-page/continuity-page.component';
import { EmbraceAccessibilityPageComponent } from './pages/topic-pages/foundation-page/embrace-accessibility-page/embrace-accessibility-page.component';
import { TrustPageComponent } from './pages/topic-pages/foundation-page/trust-page/trust-page.component';
import { FoundationOverviewPageComponent } from './pages/topic-pages/foundation-page/foundation-overview-page/foundation-overview-page.component';
import { UserNeedsPageComponent } from './pages/topic-pages/foundation-page/user-needs-page/user-needs-page.component';
import { FormsPageComponent } from './pages/topic-pages/components-page/forms-page/forms-page.component';
import { ResizableDirective } from './directives/resizable.directive';
// import { ContentsModule } from 'angular-contents';
import { AngularTiltModule } from 'angular-tilt';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { InjectDirective } from './directives/appInject.directive';
import { TextInputsComponent } from './components/text-inputs/text-inputs.component';
import { DropDownsComponent } from './components/drop-downs/drop-downs.component';
import { RadioButtonsComponent } from './components/radio-buttons/radio-buttons.component';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
import { MenuExampleComponent } from './components/menu-example/menu-example.component';
import { MultiSelectExampleComponent } from './components/multi-select-example/multi-select-example.component';
import { ScrollSpyDirective } from './directives/scroll-spy.directive';
import { CheckboxComponent } from './components/checkbox/checkbox.component';


export const firebaseConfig = {
  apiKey: 'AIzaSyDube3bcNPWdFbYbt3veyajdx1J0Qio-s8',
  authDomain: 'style-guide-app.firebaseapp.com',
  databaseURL: 'https://style-guide-app.firebaseio.com',
  projectId: 'style-guide-app',
  storageBucket: 'style-guide-app.appspot.com',
  messagingSenderId: '1051463396968',
  appId: '1:1051463396968:web:590257d75091f1230c15dd',
  measurementId: 'G-0CSFH36JFV'
};
@Injectable({
  providedIn: 'root'
})

// MATERIAL IMPORTS
// import {MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DefaultLayoutComponent,
    HomeComponent,
    DesignPageComponent,
    DesignSystemPageComponent,
    SignupPageComponent,
    FoundationPageComponent,
    ComponentsPageComponent,
    IconsPageComponent,
    FooterPageComponent,
    AccessibilityComplianceAssessmentComponent,
    LoginPageComponent,
    AccessibilityPageComponent,
    ColorPalettePageComponent,
    DesignOverviewPageComponent,
    TypographyPageComponent,
    AccordionPageComponent,
    AlertPageComponent,
    BannerPageComponent,
    FooterComponent,
    FormTemplatesComponent,
    GridPageComponent,
    SearchPageComponent,
    SideNavigationPageComponent,
    TablePageComponent,
    TagPageComponent,
    AccessibilityOverviewPageComponent,
    AccessibilityReqPageComponent,
    AccessibilityAssessmentPageComponent,
    NewAppAssessmentComponent,
    BasicAppInfoComponent,
    AppWorkflowsComponent,
    AppInfoReviewComponent,
    // AddTestersComponent,
    UsersTypeAheadComponent,
    AccessibilityTestComponent,
    ButtonsPageComponent,
    ScrollTopComponent,
    ViewModeDirective,
    EditableComponent,
    EditModeDirective,
    EditableOnEnterDirective,
    TableExampleComponent,
    FocusableDirective,
    ListenPageComponent,
    ContinuityPageComponent,
    EmbraceAccessibilityPageComponent,
    TrustPageComponent,
    FoundationOverviewPageComponent,
    UserNeedsPageComponent,
    FormsPageComponent,
    VerifyEmailComponent,
    ResizableDirective,
    ParticlesSectionComponent,
    InjectDirective,
    TextInputsComponent,
    DropDownsComponent,
    RadioButtonsComponent,
    AutoCompleteComponent,
    MenuExampleComponent,
    MultiSelectExampleComponent,
    ScrollSpyDirective,
    CheckboxComponent


  ],
  exports:[UsersTypeAheadComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    ComponentsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    LayoutsModule,
    NgbModule,
    Ng2SearchPipeModule,
    FormsModule,
    ResizableModule,
    AngularTiltModule,
    NgxPageScrollCoreModule.forRoot({duration: 900}),
    NgxPageScrollModule,

    // ContentsModule
    // ParticlesModule


  ],
  entryComponents: [TableExampleComponent, DropDownsComponent, TextInputsComponent,
    RadioButtonsComponent, AutoCompleteComponent, MenuExampleComponent, MultiSelectExampleComponent,
    CheckboxComponent], // ADD COMPONENTS HERE IF YOU WANT TO DYNAMICALLY LOAD THEM WITH A LOOP METHOD
  providers: [AuthService, DataService, AngularFirestoreModule, SideNavigationComponent, ValidationServiceService, TableDataService, ViewModeDirective, ],
  bootstrap: [AppComponent, UsersTypeAheadComponent, TableExampleComponent],
  // entryComponents: [NewAppAssessmentComponent]
})

export class AppModule { }
