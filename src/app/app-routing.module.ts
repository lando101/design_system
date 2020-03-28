import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// PAGE IMPORTS
import { HomeComponent } from '../app/pages/home/home.component';
import { DesignPageComponent } from './pages/topic-pages/design-page/design-page.component';
import { FoundationPageComponent } from './pages/topic-pages/foundation-page/foundation-page.component';
// import { AssetsPageComponent } from './pages/assets-page/assets-page.component';
import { ComponentsPageComponent } from './pages/topic-pages/components-page/components-page.component';

// SERVICES
import { AuthGuard } from './core/auth';
import { DefaultLayoutComponent } from './layouts';
import { AccessibilityPageComponent } from './pages/topic-pages/accessibility-page/accessibility-page.component';
import { ColorPalettePageComponent } from './pages/color-palette-page/color-palette-page.component';
import { ButtonsPageComponent } from './pages/buttons-page/buttons-page.component';


const routes: Routes = [
  { path: '',
    component: DefaultLayoutComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'foundation', component: FoundationPageComponent, canActivate: [AuthGuard], children: [
          // {path: '', component: ColorPalettePageComponent, data: { title: 'Color Palette'}},
          // {path: 'color-palette', component: ColorPalettePageComponent, data: { title: 'Color Palette'}},
          // {path: 'typography', component: TypographyPageComponent, data: { title: 'Typography'}},
          // {path: 'forms', component: FormsPageComponent, data: { title: 'Forms'}},
          // {path: 'buttons', component: ButtonsPageComponent, data: { title: 'Buttons'}},
         ]
      },
      { path: 'design', component: DesignPageComponent, canActivate: [AuthGuard], children:[
        {path: '', component: ColorPalettePageComponent, data: { title: 'Color Palette'}},
        {path: 'color-palette', component: ColorPalettePageComponent, data: { title: 'Color Palette'}},
           {path: 'icons', component: ButtonsPageComponent, data: { title: 'Buttons'}},
      ]
    },
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
