import { ListenPageComponent } from './pages/topic-pages/foundation-page/listen-page/listen-page.component';
import { ContinuityPageComponent } from './pages/topic-pages/foundation-page/continuity-page/continuity-page.component';
import { EmbraceAccessibilityPageComponent } from './pages/topic-pages/foundation-page/embrace-accessibility-page/embrace-accessibility-page.component';
import { TrustPageComponent } from './pages/topic-pages/foundation-page/trust-page/trust-page.component';
import { FoundationOverviewPageComponent } from './pages/topic-pages/foundation-page/foundation-overview-page/foundation-overview-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// PAGE IMPORTS
import { HomeComponent } from '../app/pages/home/home.component';
import { DesignPageComponent } from './pages/topic-pages/design-page/design-page.component';
import { FoundationPageComponent } from './pages/topic-pages/foundation-page/foundation-page.component';
// import { AssetsPageComponent } from './pages/assets-page/assets-page.component';
import { ComponentsPageComponent } from './pages/topic-pages/components-page/components-page.component';
import { IconsPageComponent } from './pages/topic-pages/design-page/icons-page/icons-page.component';


// SERVICES
import { AuthGuard } from './core/auth';
import { DefaultLayoutComponent } from './layouts';
import { AccessibilityPageComponent } from './pages/topic-pages/accessibility-page/accessibility-page.component';
import { ColorPalettePageComponent } from './pages/topic-pages/design-page/color-palette-page/color-palette-page.component';
import { ButtonsPageComponent } from './pages/topic-pages/components-page/buttons-page/buttons-page.component';
import { TypographyPageComponent } from './pages/topic-pages/design-page/typography-page/typography-page.component';
import { UserNeedsPageComponent } from './pages/topic-pages/foundation-page/user-needs-page/user-needs-page.component';
import { DesignOverviewPageComponent } from './pages/topic-pages/design-page/design-overview-page/design-overview-page.component';
import { FormsPageComponent } from './pages/topic-pages/components-page/forms-page/forms-page.component';
import { AccordionPageComponent } from './pages/topic-pages/components-page/accordion-page/accordion-page.component';
import { AlertPageComponent } from './pages/topic-pages/components-page/alert-page/alert-page.component';
import { BannerPageComponent } from './pages/topic-pages/components-page/banner-page/banner-page.component';
import { FooterPageComponent } from './pages/topic-pages/components-page/footer-page/footer-page.component';
import { FormTemplatesComponent } from './pages/topic-pages/components-page/form-templates/form-templates.component';
import { GridPageComponent } from './pages/topic-pages/components-page/grid-page/grid-page.component';
import { SearchPageComponent } from './pages/topic-pages/components-page/search-page/search-page.component';
import { SideNavigationPageComponent } from './pages/topic-pages/components-page/side-navigation-page/side-navigation-page.component';
import { TablePageComponent } from './pages/topic-pages/components-page/table-page/table-page.component';
import { TagPageComponent } from './pages/topic-pages/components-page/tag-page/tag-page.component';

const routes: Routes = [
  { path: '',
    component: DefaultLayoutComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'foundation', component: FoundationPageComponent, canActivate: [AuthGuard], children: [
          {path: '', component: FoundationOverviewPageComponent, data: { title: 'Overview'}},
          {path: 'foundation-overview', component: FoundationOverviewPageComponent, data: { title: 'Overview'}},
          {path: 'user-needs', component: UserNeedsPageComponent, data: { title: 'Start with Real User Needs'}},
          {path: 'trust', component: TrustPageComponent, data: { title: 'Earn Trust'}},
          {path: 'embrace-accessibility', component: EmbraceAccessibilityPageComponent, data: { title: 'Embrace Accessibility'}},
          {path: 'continuity', component: ContinuityPageComponent, data: { title: 'Promote Continuity'}},
          {path: 'listen', component: ListenPageComponent, data: { title: 'Listen'}}
         ]
      },
      { path: 'design', component: DesignPageComponent, canActivate: [AuthGuard], children:[
        {path: '', redirectTo: 'design-overview', pathMatch: 'full' },
        {path: 'design-overview', component: DesignOverviewPageComponent, data: { title: 'Color Palette'}},
        {path: 'color-palette', component: ColorPalettePageComponent, data: { title: 'Color Palette'}},
        {path: 'icons', component: IconsPageComponent, data: { title: 'Icons'}},
        {path: 'typography', component: TypographyPageComponent, data: { title: 'Typography'}},
      ]
    },
      { path: 'components', component: ComponentsPageComponent, canActivate: [AuthGuard], children:[
        {path: '', redirectTo: 'design-overview', pathMatch: 'full' },
        {path: 'alert', component: AlertPageComponent, data: { title: 'Alert'}},
        {path: 'accordion', component: AccordionPageComponent, data: { title: 'Accordion'}},
        {path: 'form-controls', component: FormsPageComponent, data: { title: 'Form Controls'}},
        {path: 'button', component: ButtonsPageComponent, data: { title: 'Buttons'}},
        {path: 'banner', component: BannerPageComponent, data: { title: 'Banner'}},
        {path: 'footer', component: FooterPageComponent, data: { title: 'Footer'}},
        {path: 'form-templates', component: FormTemplatesComponent, data: { title: 'Form Templates'}},
        {path: 'grid', component: GridPageComponent, data: { title: 'Grid'}},
        {path: 'search', component: SearchPageComponent, data: { title: 'Search'}},
        {path: 'side-navigation', component: SideNavigationPageComponent, data: { title: 'Side Navigation'}},
        {path: 'table', component: TablePageComponent, data: { title: 'Table'}},
        {path: 'tag', component: TagPageComponent, data: { title: 'Tag'}},

      ]},
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
