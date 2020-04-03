import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {MatChipsModule} from '@angular/material/chips';


export interface Page {
  name: string;
  type?: string;
  status?: string;
  score?: number;
}

@Component({
  selector: 'app-app-workflows',
  templateUrl: './app-workflows.component.html',
  styleUrls: ['./app-workflows.component.scss']
})
export class AppWorkflowsComponent implements OnInit {

  workFlowForm: FormGroup;
  @Input() submittedFromParent: boolean;
  @Output() allowProgression = new EventEmitter();
  submitted = false;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  pages: Page[] = [

  ];
  constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
      this.workFlowForm = this.formBuilder.group({
        workflows: this.formBuilder.array([
          this.formBuilder.control(null)
        ]),
        // pages: this.formBuilder.array([
        //   this.formBuilder.control(null)
        // ])
    });


  }


  // ADD A CHIP & REMOVE A CHIP
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our page
    if ((value || '').trim()) {
      this.pages.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(page: any): void {
    const index = this.pages.indexOf(page);

    if (index >= 0) {
      this.pages.splice(index, 1);
    }
  }

// ADDING AND REMOVING WORKFLOW INPUTS
  addWorkflow(): void {
    (this.workFlowForm.get('workflows') as FormArray).push(
      this.formBuilder.control(null)
    );
  }

  removeWorkflow(index) {
    (this.workFlowForm.get('workflows') as FormArray).removeAt(index);
  }

  // ADDING AND REMOVING PAGE INPUTS
  // addPage(): void {
  //   (this.workFlowForm.get('pages') as FormArray).push(
  //     this.formBuilder.control(null)
  //   );
  // }

  // removePage(index) {
  //   (this.workFlowForm.get('pages') as FormArray).removeAt(index);
  // }


  // GET WORKFLOW CONTROLS
  getWorkflowFormControls(): AbstractControl[] {
    return (<FormArray> this.workFlowForm.get('workflows')).controls;
  }

  // getPageFormControls(): AbstractControl[] {
  //   return (<FormArray> this.workFlowForm.get('pages')).controls;
  // }

}
