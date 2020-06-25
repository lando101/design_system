import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormGroup, Validators } from '@angular/forms';
import { TableDataService } from 'src/app/services/table-data.service';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { MatSliderChange } from '@angular/material/slider';
import { AngularResizedEventModule } from 'angular-resize-event';
import { ResizedEvent } from 'angular-resize-event';
import { ResizeEvent } from 'angular-resizable-element';
// import { MatSliderChange } from '@angular/material';

declare var $: any;

@Component({
  selector: 'app-table-example',
  templateUrl: './table-example.component.html',
  styleUrls: ['./table-example.component.scss'],
  styles: [':host { width: 100%}'],
})

export class TableExampleComponent implements OnInit {
  enableGhostResize=true;
  resizeEdges={ bottom: true, right: true, top: true, left: true };
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.core.list$;
  controls: FormArray;
  tableMockData = [
    {
      "header": "Number",
      "headerDef": "position",
      "rows": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20"
      ]
    },
    {
      "header": "Name",
      "headerDef": "name",
      "rows": [
        "Hydrogen",
        "Helium",
        "Lithium",
        "Beryllium",
        "Boron",
        "Carbon",
        "Nitrogen",
        "Oxygen",
        "Fluorine",
        "Neon",
        "Silicon",
        "Radium",
        "Magnesium",
        "Calcium",
        "Argon",
        "Krypton",
        "Uranium",
        "Mercury",
        "Phosphorus",
        "Chlorine"
      ]
    },
    {
      "header": "Weight",
      "headerDef": "weight",
      "rows": [
        "1.0079",
        "4.0026",
        "6.941",
        "9.0122",
        "10.811",
        "12.0107",
        "14.0067",
        "15.9994",
        "18.9984",
        "20.1797",
        "28.085",
        "226",
        "24.305",
        "40.078",
        "39.948",
        "83.798",
        "238.03",
        "200.59",
        "30.974",
        "35.45"
      ]
    },
    {
      "header": "Symbol",
      "headerDef": "symbol",
      "rows": [
        "H",
        "He",
        "Li",
        "Be",
        "B",
        "C",
        "N",
        "O",
        "F",
        "Ne",
        "Si",
        "Ra",
        "Mg",
        "Ca",
        "Ar",
        "Kr",
        "U",
        "Hg",
        "P",
        "Cl"
      ]
    },
    {
      "header": "Symbol",
      "headerDef": "symbol",
      "rows": [
        "H",
        "He",
        "Li",
        "Be",
        "B",
        "C",
        "N",
        "O",
        "F",
        "Ne",
        "Si",
        "Ra",
        "Mg",
        "Ca",
        "Ar",
        "Kr",
        "U",
        "Hg",
        "P",
        "Cl"
      ]
    }
  ]
  maxColumns = 8;
  minColumns = 3;
  valueColumns = 4;
  columnWidth:string = '25%';

  constructor(private core: TableDataService) { }

  ngOnInit() {

    const toGroups = this.core.list$.value.map(entity => {
      return new FormGroup({
        position: new FormControl(entity.position, Validators.required),
        name: new FormControl(entity.name, Validators.required),
        weight: new FormControl(entity.weight, Validators.required),
        symbol: new FormControl(entity.symbol, Validators.required)
      }, { updateOn: "blur" });
    });

    this.controls = new FormArray(toGroups);

  }


  widthCalc(value: number){
    let width;
    width = 100/value;
    this.columnWidth = width.toString() + '%';
    console.log(this.columnWidth);
  }

  updateField(index, field) {
    const control = this.getControl(index, field);
    if (control.valid) {
      this.core.update(index, field, control.value);
    }

  }

  addRow(rowCount: number) {
    this.core.addRow(rowCount);
  }

  removeRow(amount: number, oldValue: number) {
    this.core.removeRow(amount, oldValue);
  }

  getControl(index, fieldName) {
    const a = this.controls.at(index).get(fieldName) as FormControl;
    return this.controls.at(index).get(fieldName) as FormControl;
  }

  clearFields(){
    $('input').val('');
    this.value = 10;
    this.valueColumns = 4;
  }







  // SLIDER VARIABLES AND LOGIC
  // ROWS
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 20;
  min = 1;
  showTicks = false;
  step = 1;
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

  onSliderChange(event: MatSliderChange) {
    console.log(event.value);
    // IF NEW VALUE IS LARGER THAN OLD VALUE ADD ROW
    if (event.value > this.oldValue) {
      this.addRow(event.value);
    }
    if (event.value < this.oldValue) {
      this.removeRow(event.value, this.oldValue);
    }
    this.oldValue = this.value;
  }




  get tickIntervalColumn(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickIntervalColumns) : 0;
  }
  set tickIntervalColumn(valueColumns) {
    this._tickIntervalColumns = coerceNumberProperty(valueColumns);
  }
  private _tickIntervalColumns = 1;

  onSliderChangeColumn(event: MatSliderChange) {
    console.log(event.value);
    this.widthCalc(event.value);
    // IF NEW VALUE IS LARGER THAN OLD VALUE ADD ROW
    if (event.value > this.oldValue) {
      this.addRow(event.value);
    }
    if (event.value < this.oldValue) {
      this.removeRow(event.value, this.oldValue);
    }
    this.oldValue = this.valueColumns;
  }

}

