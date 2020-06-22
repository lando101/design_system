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
  MatCheckboxModule




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
  MatCheckboxModule

  // FooterComponent
 ],
 providers: [
  // {provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: {disabled: true}},
]
})


export class SharedModule {}
