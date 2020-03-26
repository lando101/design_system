import { NgModule } from '@angular/core';
// import { MatToolbarModule } from '@angular/material/toolbar';

// MATERIAL IMPORTS
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';




@NgModule({
 imports: [
  // MatToolbarModule
  MatInputModule,
  MatTabsModule,
  MatStepperModule,
 ],
 exports: [
  // MatToolbarModule
  MatInputModule,
  MatTabsModule,
  MatStepperModule
 ]
})

export class SharedModule {}
