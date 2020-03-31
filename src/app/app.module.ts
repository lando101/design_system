import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
// 3RD PARD IMPORTS
import { BsDropdownModule } from 'ngx-bootstrap';
import { NgModule, Injectable } from '@angular/core';
// 3RD PARD IMPORTS
// import { BsDropdownModule } from 'ngx-bootstrap';
// import { AngularFireModule } from '@angular/fire';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// PROJECT COMPONENTS
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { SharedModule } from './shared/shared.module';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DesignPageComponent } from './pages/topic-pages/design-page/design-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DesignSystemPageComponent } from './pages/design-system-page/design-system-page.component';

import { SignupPageComponent } from './pages/signup-page/signup-page.component';

import { FoundationPageComponent } from './pages/topic-pages/foundation-page/foundation-page.component';
import { ComponentsPageComponent } from './pages/topic-pages/components-page/components-page.component';
// import { AssetsPageComponent } from './pages/assets-page/assets-page.component';
// SERVICES
import { AuthService } from './services/auth.service';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

import { AuthComponent } from './core/auth';
import { DefaultLayoutComponent } from './layouts';
import { LayoutsModule } from './layouts/layouts.module';
// import { DesignOverviewComponent } from './pages/de';
import { IconsPageComponent } from './pages/topic-pages/design-page/icons-page/icons-page.component';
import { DataService } from './services/data.service';
import { AccessibilityComplianceService } from './services/accessibility-compliance-data.service';
import { AccessibilityComplianceAssessmentComponent } from './components/accessibility-compliance-assessment/accessibility-compliance-assessment.component';

// MATERIAL IMPORTS
import { ReactiveFormsModule } from '@angular/forms';
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
    // AssetsPageComponent,
    // LoginPageComponent,
    // DesignOverviewComponent,
    IconsPageComponent,
    AccessibilityComplianceAssessmentComponent,
    LoginPageComponent,
    AccessibilityPageComponent,
    ColorPalettePageComponent,
    DesignOverviewPageComponent,
    TypographyPageComponent,
    AccordionPageComponent,
    AlertPageComponent,
    BannerPageComponent,
    FooterPageComponent,
    FormTemplatesComponent,
    GridPageComponent,
    SearchPageComponent,
    SideNavigationPageComponent,
    TablePageComponent,
    TagPageComponent
  ],
  exports: [
    FooterPageComponent
  ],
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
    // MatInputModule
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    LayoutsModule
  ],
  providers: [AuthService, DataService, AngularFirestoreModule, SideNavigationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
