import { Component, OnInit, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';


@Component({
  selector: 'app-new-app-assessment',
  templateUrl: './new-app-assessment.component.html',
  styleUrls: ['./new-app-assessment.component.scss']
})
export class NewAppAssessmentComponent implements OnInit {
  // @Output() submitted = new EventEmitter();
  submitted: boolean;
  isLinear = true;
  appInfoGroup: FormGroup;
  workFlowInfoGroup: FormGroup;
  stepper: MatStepper;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
      this.appInfoGroup = this.formBuilder.group({
        appInfo: ['', Validators.required],
      });
      this.appInfoGroup.controls['appInfo'].setErrors({'incorrect': true});

      this.workFlowInfoGroup = this.formBuilder.group({
        workFlowInfo: ['', Validators.required],
      });
      console.log(this.appInfoGroup.controls.appInfo.status);
  }


 // TELL CHILD COMPONENT SUBMISSION WAS ATTEMPTED
 onSubmit(stepper: MatStepper) {
    this.stepper = stepper;
    this.submitted= true;
    console.log('TRIED TO SUBMIT FROM PARENT');
    setTimeout(() => {
      this.submitted = false;
    }, 200);
  }

  // VALIDATION WAS COMPLETED AND GOOD TO GO TO NEXT STEP
  successfulSubmit(submit: boolean){
    if(submit){
      this.appInfoGroup.controls['appInfo'].setErrors(null);
      setTimeout(() => {
        this.stepper.next();
      }, 100);
    }
  }
}
