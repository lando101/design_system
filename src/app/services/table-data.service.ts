import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

import { PeriodicElement } from '../models/periodic-element.model';
import { NgForOf } from '@angular/common';
export class TableDataService {

  list: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];
  list$: BehaviorSubject<PeriodicElement[]> = new BehaviorSubject(this.list);

  listExtended: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Silicon', weight: 28.085, symbol: 'Si' },
    { position: 12, name: 'Radium', weight: 226, symbol: 'Ra' },
    { position: 13, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 14, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
    { position: 15, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 16, name: 'Krypton', weight: 83.798, symbol: 'Kr' },
    { position: 17, name: 'Uranium', weight: 238.03, symbol: 'U' },
    { position: 18, name: 'Mercury', weight: 200.59, symbol: 'Hg' },
    { position: 19, name: 'Phosphorus', weight: 30.974, symbol: 'P' },
    { position: 20, name: 'Chlorine', weight: 35.45, symbol: 'Cl' },
  ];
  listExtended$: BehaviorSubject<PeriodicElement[]> = new BehaviorSubject(this.list);

  constructor() {
    console.log(this.list);
  }


  update(index, field, value) {
    this.list = this.list.map((e, i) => {
      if (index === i) {
        return {
          ...e,
          [field]: value
        }
      }
      return e;
    });
    this.list$.next(this.list);
  }

  // ADD ROW BASED ON NUMBER FROM SLIDER
  addRow(amount: number){
    // this.list.push({position: 11, name: 'Hydrogen', weight: 1.0079, symbol: 'H'});
    console.log('received request to add row');

    for (let index = this.list.length; index < amount - 1; index++) {
      this.list.push(this.listExtended[(index+1)]);
      this.list$.next(this.list);
    }
    this.list$.next(this.list);
  }

  removeRow(amount: number, oldAmount: number){
    this.list.splice(amount, oldAmount);
    this.list$.next(this.list);
  }

  getControl(index, fieldName) {
  }



}
