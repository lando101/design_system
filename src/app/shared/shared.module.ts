import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MatToolbarModule } from '@angular/material/toolbar';

// MATERIAL IMPORTS
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule} from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { FormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
// import { MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core/ripple';
import {MatChipsModule} from '@angular/material/chips';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatSliderModule} from '@angular/material/slider';
import { ParticlesModule } from 'angular-particle';
// import { MatTooltipModule } from '@angular/material/tooltip/tooltip-module';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { RippleGlobalOptions, MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSidenavModule} from '@angular/material/sidenav';


// import {FooterComponent} from '../components/footer/footer.component';


@NgModule({
 imports: [
  // MatToolbarModule
  MatInputModule,
  MatTabsModule,
  MatStepperModule,
  MatMenuModule,
  MatIconModule,
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MatChipsModule,
  MatCheckboxModule,
  MatSelectModule,
  MatTableModule,
  MatSliderModule,
  ParticlesModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatButtonModule,
  MatRadioModule,
  MatAutocompleteModule,
  MatSidenavModule
  // AngularTiltModule


  // FooterComponent
 ],
 exports: [
  // MatToolbarModule
  MatInputModule,
  MatTabsModule,
  MatStepperModule,
  MatMenuModule,
  MatIconModule,
  ReactiveFormsModule,
  MatChipsModule,
  MatCheckboxModule,
  MatSelectModule,
  MatTableModule,
  MatSliderModule,
  ParticlesModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatButtonModule,
  MatRadioModule,
  MatAutocompleteModule,
  MatSidenavModule



  // FooterComponent
 ],
 providers: [
  // {provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: {disabled: true}},
]
})


export class SharedModule {}
