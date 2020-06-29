import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap';
import {MatChipInputEvent} from '@angular/material/chips';
import { ENTER, COMMA } from '@angular/cdk/keycodes';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-drop-downs',
  templateUrl: './drop-downs.component.html',
  styleUrls: ['./drop-downs.component.scss'],
  providers:[{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class DropDownsComponent implements OnInit {
  id: string;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: Fruit[] = [
    {name: 'Lemon'},
    {name: 'Lime'},
    {name: 'Apple'},
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
