import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap';
import {MatChipInputEvent} from '@angular/material/chips';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
export interface Options {
  name: string;
}


@Component({
  selector: 'app-radio-buttons',
  templateUrl: './radio-buttons.component.html',
  styleUrls: ['./radio-buttons.component.scss']
})
export class RadioButtonsComponent implements OnInit {
  id: string;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  class="example-radio-group-vertical"
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  options: Options[] = [
    {name: 'Lemon'},
    {name: 'Lime'},
    {name: 'Apple'},
  ];
  constructor() { }
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our options
    if ((value || '').trim()) {
      this.options.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }


  remove(options: Options): void {
    const index = this.options.indexOf(options);

    if (index >= 0) {
      this.options.splice(index, 1);
    }
  }

  ngOnInit(): void {
  }

}
