import { NgModule } from '@angular/core';
// import { MatToolbarModule } from '@angular/material/toolbar';

// MATERIAL IMPORTS
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
 imports: [
  // MatToolbarModule
  MatInputModule,
  MatTabsModule
 ],
 exports: [
  // MatToolbarModule
  MatInputModule,
  MatTabsModule
 ]
})

export class SharedModule {}
