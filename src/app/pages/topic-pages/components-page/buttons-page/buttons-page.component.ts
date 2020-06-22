import { Component, OnInit, DoCheck, OnChanges, NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, FormControl } from "@angular/forms";


@Component({
  templateUrl: './buttons-page.component.html',
  styleUrls: ['./buttons-page.component.scss'],
  styles: [':host { width: 100%; margin-bottom: 55px}']
})
export class ButtonsPageComponent implements DoCheck {

  buttonLabel = 'Lorem Ipsum';
  buttonIcon = 'fas fa-wrench'
  floatLabelControl = new FormControl('always');

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    console.log('Running change detection ', Date.now());
  }
}
