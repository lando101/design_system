import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { DefaultLayoutModule } from './default-layout/default-layout.module';
// import { BrowserModule } from '@angular/platform-browser';
// import { TourMatMenuModule } from 'ngx-tour-md-menu';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    DefaultLayoutModule,
    LayoutsRoutingModule
  ],
  declarations: [ ]
})
export class LayoutsModule { }
