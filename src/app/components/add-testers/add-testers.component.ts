import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {MatChipsModule} from '@angular/material/chips';
import { stringify } from 'querystring';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

export interface Tester {
  [x: string]: any;
  // toLowerCase();
  uid: string;
  email: string;
  firstName: string;
  lastName: string;
  primaryTester?: boolean;
  icon?: string;
  color?: string;
}

@Component({
  selector: 'app-add-testers',
  templateUrl: './add-testers.component.html',
  styleUrls: ['./add-testers.component.scss']
})
export class AddTestersComponent implements OnInit {
  testersForm: FormGroup;
  model: any;
  formatter = (result: string) => result.toUpperCase();
  @Input() submittedFromParent: boolean;
  @Output() allowProgression = new EventEmitter();
  submitted = false;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  // testers: Tester[] = [
  //   {uid: '23e4as89', email: 'marissa@gmail.com', firstName: 'Marissa', lastName: 'Martucci', }
  // ];

  // search = (text$: Observable<string>) =>
  // text$.pipe(
  //   debounceTime(200),
  //   distinctUntilChanged(),
  //   map(term => term === '' ? []
  //     : this.testers.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  // )


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // this.testersForm = this.formBuilder.group({
    //   testers: this.formBuilder.array([
    //     this.formBuilder.control(null)
    //   ]),
    // });
  }

    // ADD A CHIP & REMOVE A CHIP
    // add(event: MatChipInputEvent): void {
    //   const input = event.input;
    //   const value = event.value;

    //   // Add our page
    //   if ((value || '').trim()) {
    //     // this.testers.push({uid: value.trim(), email: value.trim(), firstName: value.trim(), lastName: value.trim(), primaryTester: false, icon: value.trim(), color: value.trim()});
    //   }

    //   // Reset the input value
    //   if (input) {
    //     input.value = '';
    //   }
    // }

  // ADDING AND REMOVING TESTER INPUTS
  // addTester(): void {
  //   (this.testersForm.get('testers') as FormArray).push(
  //     this.formBuilder.control(null)
  //   );
  // }

  // removeTester(index) {
  //   (this.testersForm.get('workflows') as FormArray).removeAt(index);
  // }

  // GET WORKFLOW CONTROLS
  // getTesterFormControls(): AbstractControl[] {
  //   return (<FormArray> this.testersForm.get('workflows')).controls;
  // }
}
