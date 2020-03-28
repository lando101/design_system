import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// PAGE IMPORTS
import { HomeComponent } from '../app/pages/home/home.component';
import { DesignPageComponent } from '../app/pages/design-page/design-page.component';
import { FoundationPageComponent } from './pages/foundation-page/foundation-page.component';
// import { AssetsPageComponent } from './pages/assets-page/assets-page.component';
import { ComponentsPageComponent } from './pages/components-page/components-page.component';

// SERVICES
import { AuthGuard } from './core/auth';
import { DefaultLayoutComponent } from './layouts';
import { AccessibilityPageComponent } from './pages/accessibility-page/accessibility-page.component';


const routes: Routes = [
  { path: '',
    component: DefaultLayoutComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'foundation', component: FoundationPageComponent, canActivate: [AuthGuard]},
      { path: 'design', component: DesignPageComponent, canActivate: [AuthGuard]},
      { path: 'components', component: ComponentsPageComponent, canActivate: [AuthGuard]},
      { path: 'accessibility', component: AccessibilityPageComponent, canActivate: [AuthGuard]}
      // { path: '**', component: PageNotFoundComponent }
    ]
  }

];



// OLD
// @NgModule({
//   imports: [RouterModule.forRoot(routes,
// { enableTracing: true})],
//   exports: [RouterModule]
// })

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    })],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class AppRoutingModule { }
