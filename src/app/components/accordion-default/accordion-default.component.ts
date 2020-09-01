import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormArray } from '@angular/forms';
import { coerceNumberProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'app-accordion-default',
  templateUrl: './accordion-default.component.html',
  styleUrls: ['./accordion-default.component.scss']
})
export class AccordionDefaultComponent implements OnInit {
  height = 170;

  // SLIDER VARIABLES AND LOGIC
  // ROWS
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 600;
  min = 1;
  showTicks = true;
  step = 15;
  thumbLabel = true;
  value = 10;
  oldValue = 10;
  vertical = false;

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(value) {
    this._tickInterval = coerceNumberProperty(value);
  }
  private _tickInterval = 1;
  groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1',
      id: 'heading1',
      collapseID: 'collapse1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2',
      id: 'heading2',
      collapseID: 'collapse2'
    }
  ];



  constructor() { }



  ngOnInit(): void {
  }


  addGroupItem(): void {
    this.groups.push({
      title: `Dynamic Group Header - ${this.groups.length + 1}`,
      content: `Dynamic Group Body - ${this.groups.length + 1}`,
      id: 'heading' + (this.groups.length+1),
      collapseID: 'collapse' + (this.groups.length+1)
    });
  }

  removeGroupItem(){
    if(this.groups.length > 1){
      this.groups.pop();
    }
  }

  reset(){
    this.height = 170;
    this.groups=[];
    this.groups = [
      {
        title: 'Dynamic Group Header - 1',
        content: 'Dynamic Group Body - 1',
        id: 'heading1',
        collapseID: 'collapse1'
      },
      {
        title: 'Dynamic Group Header - 2',
        content: 'Dynamic Group Body - 2',
        id: 'heading2',
        collapseID: 'collapse2'
      }
    ];
  }
}
