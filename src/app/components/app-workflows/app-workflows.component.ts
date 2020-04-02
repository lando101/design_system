import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl } from '@angular/forms';

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
  constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
      this.workFlowForm = this.formBuilder.group({
        appName: ['', Validators.required],
        workflows: this.formBuilder.array([
          this.formBuilder.control(null)
        ]),
        pages: this.formBuilder.array([
          this.formBuilder.control(null)
        ])
    });


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
  addPage(): void {
    (this.workFlowForm.get('pages') as FormArray).push(
      this.formBuilder.control(null)
    );
  }

  removePage(index) {
    (this.workFlowForm.get('pages') as FormArray).removeAt(index);
  }


  // GET WORKFLOW CONTROLS
  getWorkflowFormControls(): AbstractControl[] { 
    return (<FormArray> this.workFlowForm.get('workflows')).controls;
  }

  getPageFormControls(): AbstractControl[] {
    return (<FormArray> this.workFlowForm.get('pages')).controls;
  }

}
