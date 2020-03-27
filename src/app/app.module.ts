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
import { DesignPageComponent } from './pages/design-page/design-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DesignSystemPageComponent } from './pages/design-system-page/design-system-page.component';

import { SignupPageComponent } from './pages/signup-page/signup-page.component';

import { FoundationPageComponent } from './pages/foundation-page/foundation-page.component';
import { ComponentsPageComponent } from './pages/components-page/components-page.component';
import { AssetsPageComponent } from './pages/assets-page/assets-page.component';
// SERVICES
import { AuthService } from './services/auth.service';

import { AuthComponent } from './core/auth';
import { DefaultLayoutComponent } from './layouts';
import { LayoutsModule } from './layouts/layouts.module';
// import { DesignOverviewComponent } from './pages/de';
import { IconsPageComponent } from './pages/icons-page/icons-page.component';
import { AccessibilityComplianceService } from './services/accessibility-compliance-data.service';
import { AccessibilityComplianceAssessmentComponent } from './components/accessibility-compliance-assessment/accessibility-compliance-assessment.component';

// MATERIAL IMPORTS
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './pages/login-page/login-page.component';

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
    AssetsPageComponent,
    // LoginPageComponent,
    // DesignOverviewComponent,
    IconsPageComponent,
    AccessibilityComplianceAssessmentComponent,
    LoginPageComponent
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
  providers: [AuthService, AngularFirestoreModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
