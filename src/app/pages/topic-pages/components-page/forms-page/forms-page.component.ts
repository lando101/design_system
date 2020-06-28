import { Component, OnInit, Inject, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollService, EasingLogic } from 'ngx-page-scroll-core';
import { Interface } from 'readline';
import { PageContent } from 'src/app/models/page-content.model';
import { TableExampleComponent } from 'src/app/components/table-example/table-example.component';
import { InjectDirective } from 'src/app/directives/appInject.directive';
import { DropDownsComponent } from 'src/app/components/drop-downs/drop-downs.component';
import { TextInputsComponent } from 'src/app/components/text-inputs/text-inputs.component';
import { RadioButtonsComponent } from 'src/app/components/radio-buttons/radio-buttons.component';
import { AutoCompleteComponent } from 'src/app/components/auto-complete/auto-complete.component';
import { MenuExampleComponent } from 'src/app/components/menu-example/menu-example.component';
import { MultiSelectExampleComponent } from 'src/app/components/multi-select-example/multi-select-example.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckboxComponent } from 'src/app/components/checkbox/checkbox.component';


@Component({
  templateUrl: './forms-page.component.html',
  styleUrls: ['./forms-page.component.scss'],
  styles: [':host { width: 100%; margin-bottom: 55px}']
})

export class FormsPageComponent implements OnInit {

  @ViewChild(InjectDirective, {static: true}) injectComp: InjectDirective; //{static: true} is used to render OnInit
  id: number;
  test:     CheckboxComponent
;
  sections: PageContent[] = [
    {name: 'Text Inputs', id: 'text-inputs', type: 'demo', comp: TextInputsComponent, selector:'app-drop-downs'},
    {name: 'Drop Downs', id: 'drop-downs', type: 'demo', comp: DropDownsComponent, selector: 'app-drop-downs'},
    {name: 'Radio Buttons', id: 'radio-buttons', type: 'demo', comp: RadioButtonsComponent},
    {name: 'Checkbox', id: 'check-box', type: 'demo', comp: CheckboxComponent},
    {name: 'Auto-complete', id: 'auto-complete', type: 'demo', comp: AutoCompleteComponent},
    {name: 'Menu', id: 'menu', type: 'demo', comp: MenuExampleComponent},
    {name: 'Multi-select', id: 'multi-select', type: 'demo', comp: MultiSelectExampleComponent},
  ];
  currentSection = this.sections[0].id;
  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any, private _componentFactoryResolver: ComponentFactoryResolver,
   private _route: ActivatedRoute, private _router: Router,) { }
  ngOnInit(): void {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '.theEnd',
    });
    this.loadComp();
    this._route.params.subscribe(params => {
      this.currentSection = params['sectionId'];
      this.scrollTo(this.currentSection);
    });
  }

  // DYNAMICALLY ADD COMPONENT TO DOM & ADD ID TO REFERENCE FOR SCROLL
  public loadComp(){
    this.sections.forEach(section => {
      const componentFactory = this._componentFactoryResolver.resolveComponentFactory(section.comp);
      const viewContainerRef = this.injectComp.viewContainerRef;
      // viewContainerRef.clear(); CAN BE USED TO CLEAR EXISTING COMPONENTS
      const componentRef = viewContainerRef.createComponent(componentFactory);
      componentRef.instance.id = section.id;
    });

  }

  // DETECT CURRENT SECTION
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
    this._router.navigateByUrl(sectionId);
    console.log('the section changed');
  }

  scrollTo(section) {
    document.querySelector('#' + section)
      .scrollIntoView();
  }
  // SCROLL EASING LOGIC
  public myEasing: EasingLogic = (t: number, b: number, c: number, d: number): number => {
    // easeInOutExpo easing

    if (t === 0) {
      return b;
    }
    if (t === d) {
      return b + c;
    }
    if ((t /= d / 2) < 1) {
      return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    }

    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
  }
  doSmth(reachedTarget: boolean): void {
    if (reachedTarget) {
        console.log('Yeah, we reached our destination');
    } else {
        console.log('Ohoh, something interrupted us');
    }
}



}
