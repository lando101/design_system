import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';

// 3RD PARD IMPORTS
import { BsDropdownModule } from 'ngx-bootstrap';
=======
import { NgModule, Injectable } from '@angular/core';
// import { environment } from '../environments/environment';

// 3RD PARD IMPORTS
import { BsDropdownModule } from 'ngx-bootstrap';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// PROJECT COMPONENTS
>>>>>>> login
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { HeaderComponent } from './components/header/header.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { HomeComponent } from './pages/home/home.component';
import { ColorPalettePageComponent } from './pages/color-palette-page/color-palette-page.component';
import { TypographyPageComponent } from './pages/typography-page/typography-page.component';
import { FormsPageComponent } from './pages/forms-page/forms-page.component';
import { ButtonsPageComponent } from './pages/buttons-page/buttons-page.component';
import { DesignPageComponent } from './pages/design-page/design-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { SharedModule } from './shared/shared.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
=======
import { DesignSystemPageComponent } from './pages/design-system-page/design-system-page.component';
import { EmailPageComponent } from './pages/email-page/email-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

// SERVICES
import { AuthService } from './services/auth.service';

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
>>>>>>> login

// MATERIAL IMPORTS
// import {MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavigationComponent,
    HomeComponent,
    ColorPalettePageComponent,
    TypographyPageComponent,
    FormsPageComponent,
    ButtonsPageComponent,
    DesignPageComponent,
<<<<<<< HEAD
=======
    DesignSystemPageComponent,
    EmailPageComponent,
    SignupPageComponent,
>>>>>>> login
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
<<<<<<< HEAD
    CoreModule,
    SharedModule,
    // MatInputModule
=======
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
>>>>>>> login
  ],
  providers: [AuthService, AngularFirestoreModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
