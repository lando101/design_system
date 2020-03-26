import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// PAGE IMPORTS
import { HomeComponent } from '../app/pages/home/home.component';
import { DesignPageComponent } from '../app/pages/design-page/design-page.component';
import { FoundationPageComponent } from './pages/foundation-page/foundation-page.component';
import { AssetsPageComponent } from './pages/assets-page/assets-page.component';
import { ComponentsPageComponent } from './pages/components-page/components-page.component';

// SERVICES
import { AuthGuard } from './core/auth';
import { DefaultLayoutComponent } from './layouts';


// old version
// const routes: Routes = [
//   { path: '', redirectTo: 'login', pathMatch: 'full'},
//   { path: 'login', component: LoginPageComponent, canActivate: [SecureInnerPagesGuard] },
//   { path: 'authenticated', canActivate: [AuthGuard], component: DesignSystemPageComponent, data: { title: 'Design System'}, children: [
//       { path: '', redirectTo: 'home', pathMatch: 'full'},
//       { path: 'home', component: HomeComponent },
//       { path: 'design', component: DesignPageComponent, data: { title: 'Data'}, children: [
//         {path: '', redirectTo: 'color-palette', pathMatch: 'full'},
//         {path: 'design-overview', component: DesignOverviewComponent, data: { title: 'Design Overview'}},
//         {path: 'color-palette', component: ColorPalettePageComponent, data: { title: 'Color Palette'}},
//         {path: 'typography', component: TypographyPageComponent, data: { title: 'Typography'}},
//         {path: 'icons', component: IconsPageComponent, data: { title: 'Icons'}},
//         {path: 'forms', component: FormsPageComponent, data: { title: 'Forms'}},
//         {path: 'buttons', component: ButtonsPageComponent, data: { title: 'Buttons'}}
//     ]},
//   ]},
// ];


const routes: Routes = [
  { path: '', 
    component: DefaultLayoutComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeComponent, canActivate: [AuthGuard]},
      { path: 'home', redirectTo: '' },
      { path: 'foundation', component: FoundationPageComponent, canActivate: [AuthGuard]},
      { path: 'design', component: DesignPageComponent, canActivate: [AuthGuard]},
      { path: 'components', component: ComponentsPageComponent, canActivate: [AuthGuard]},
      { path: 'assets', component: AssetsPageComponent, canActivate: [AuthGuard]}
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
