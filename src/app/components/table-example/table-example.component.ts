import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormGroup, Validators } from '@angular/forms';
import { TableDataService } from 'src/app/services/table-data.service';
import {coerceNumberProperty} from '@angular/cdk/coercion';
import { MatSliderChange } from '@angular/material/slider';
// import { MatSliderChange } from '@angular/material';



@Component({
  selector: 'app-table-example',
  templateUrl: './table-example.component.html',
  styleUrls: ['./table-example.component.scss'],
  styles: [':host { width: 100%}']
})
export class TableExampleComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.core.list$;
  controls: FormArray;

  constructor(private core: TableDataService){}

  ngOnInit() {

    const toGroups = this.core.list$.value.map(entity => {
      return new FormGroup({
        position:  new FormControl(entity.position, Validators.required),
        name: new FormControl(entity.name, Validators.required),
        weight: new FormControl(entity.weight, Validators.required),
        symbol: new FormControl(entity.symbol, Validators.required)
      },{updateOn: "blur"});
    });

    this.controls = new FormArray(toGroups);

  }


  updateField(index, field) {
    const control = this.getControl(index, field);
    if (control.valid) {
      this.core.update(index,field,control.value);
    }

   }

   addRow(){
     this.core.addRow();
   }

  getControl(index, fieldName) {
    const a  = this.controls.at(index).get(fieldName) as FormControl;
    return this.controls.at(index).get(fieldName) as FormControl;
  }

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 20;
  min = 1;
  showTicks = false;
  step = 1;
  thumbLabel = true;
  value = 10;
  vertical = false;

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(value) {
    this._tickInterval = coerceNumberProperty(value);
  }
  private _tickInterval = 1;

  onSliderChange(event: MatSliderChange) {
    console.log(event.value);
  }

}

