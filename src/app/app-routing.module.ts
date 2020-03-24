import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// PAGE IMPORTS
import { HomeComponent } from '../app/pages/home/home.component';
import { ColorPalettePageComponent } from '../app/pages/color-palette-page/color-palette-page.component';
import { TypographyPageComponent } from '../app/pages/typography-page/typography-page.component';
import { FormsPageComponent } from '../app/pages/forms-page/forms-page.component';
import { ButtonsPageComponent } from '../app/pages/buttons-page/buttons-page.component';
import { DesignPageComponent } from '../app/pages/design-page/design-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
{ path: 'design', component: DesignPageComponent, data: { title: 'Data'}, children: [
    {path: '', component: ColorPalettePageComponent, data: { title: 'Color Palette'}},
    {path: 'color-palette', component: ColorPalettePageComponent, data: { title: 'Color Palette'}},
    {path: 'typography', component: TypographyPageComponent, data: { title: 'Typography'}},
    {path: 'forms', component: FormsPageComponent, data: { title: 'Forms'}},
    {path: 'buttons', component: ButtonsPageComponent, data: { title: 'Buttons'}},
]},


  // {path: '', component: ColorPalettePageComponent, data: { title: 'Color Palette'}},
  // {path: 'color-palette', component: ColorPalettePageComponent, data: { title: 'Color Palette'}},
  // {path: 'typography', component: TypographyPageComponent, data: { title: 'Typography'}},
  // {path: 'forms', component: FormsPageComponent, data: { title: 'Forms'}},
  // {path: 'buttons', component: ButtonsPageComponent, data: { title: 'Buttons'}},


//   { path: 'component-two', component: ComponentTwo,
//   children: [
//     { path: '', redirectTo: 'child-one', pathMatch: 'full' },
//     { path: 'child-one', component: ChildOne },
//     { path: 'child-two', component: ChildTwo }
//   ]
// }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,
  { enableTracing: true})],
  exports: [RouterModule]
})


export class AppRoutingModule { }
