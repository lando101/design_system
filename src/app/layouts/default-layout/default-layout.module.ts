import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
import { SharedModule } from '../../shared/shared.module';
import { DefaultLayoutRoutingModule } from './default-layout-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    DefaultLayoutRoutingModule
  ],
  declarations: [
    // DefaultLayoutComponent,
    // HomeComponent,
    // TaskPageComponent
  ],
  exports: [ ]
})
export class DefaultLayoutModule { }
