import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../core/auth';
import { HomeComponent } from '../../pages/home/home.component';
import { DefaultLayoutComponent } from './default-layout.component';

  const pagesRoutes: Routes = [
  { path: '',
    component: DefaultLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeComponent, canActivate: [AuthGuard]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(pagesRoutes)],
  exports: [RouterModule]
})
export class DefaultLayoutRoutingModule {}
