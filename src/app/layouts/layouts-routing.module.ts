import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/auth';

const pagesRoutes: Routes = [
    {path: '', loadChildren:  () => import('./default-layout/default-layout.module').then(m => m.DefaultLayoutModule),
     canActivate: [AuthGuard]}
  ];

@NgModule({
  imports: [RouterModule.forChild(pagesRoutes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule {}
