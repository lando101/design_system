import { Component, OnInit, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { ValidationServiceService } from 'src/app/services/validation-service.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-new-app-assessment',
  templateUrl: './new-app-assessment.component.html',
  styleUrls: ['./new-app-assessment.component.scss'],
  styles: [':host { overflow: auto}']

})
export class NewAppAssessmentComponent implements OnInit {
  // @Output() submitted = new EventEmitter();
  submittedBasicInfo: boolean;
  submittedTesterInfo: boolean;
  isLinear = true;
  appInfoGroup: FormGroup;
  appReviewInfoGroup: FormGroup;
  appTestersInfoGroup: FormGroup;
  stepper: MatStepper;
  type: number;
  validationBasicInfoSubscription: Subscription;
  validationTesterInfoSubscription: Subscription;
  basicInfoValid: boolean;
  testerInfoValid: boolean;

  constructor(private formBuilder: FormBuilder, private validationService: ValidationServiceService) { }

  ngOnInit(): void {

    // REQUIRE VALIDATION FOR BASIC APP INFO
    this.appInfoGroup = this.formBuilder.group({
      appInfo: ['', Validators.required],
    });
    this.appInfoGroup.controls['appInfo'].setErrors({ 'incorrect': true });

    // REQUIRE VALIDATION FOR TESTER INFO
    this.appTestersInfoGroup = this.formBuilder.group({
      testersInfo: ['', Validators.required],
    });
    this.appTestersInfoGroup.controls['testersInfo'].setErrors({ 'incorrect': true });

    // REQUIRE VALIDATION FOR TESTER INFO
    this.appReviewInfoGroup = this.formBuilder.group({
      reviewInfo: ['', Validators.nullValidator],
    });

    // SUBSCRIBE TO SEE IF BASIC INFO IS VALID OR NOT
    this.validationBasicInfoSubscription = this.validationService.basicInfoValidationStatus$.subscribe(data => {
      if (data) {
        this.basicInfoValid = data;
        console.log('NEW APP SEES BASIC INFO IS VALID')
        this.appInfoGroup.controls['appInfo'].setErrors(null);
        this.successfulSubmit();
      }
    });

    // SUBSCRIBE TO SEE IF BASIC INFO IS VALID OR NOT
    this.validationTesterInfoSubscription = this.validationService.testerInfoValidationStatus$.subscribe(data => {
      if (data) {
        this.testerInfoValid = data;
        console.log('TESTER INFO VALID' + data);
        this.appTestersInfoGroup.controls['testersInfo'].setErrors(null);
        // this.successfulSubmit();
      }
    });
  }

  // TELL CHILD COMPONENT SUBMISSION WAS ATTEMPTED
  onSubmit(stepper: MatStepper, type: number) {
    this.type = type;
    this.stepper = stepper;
    if (type === 0) { // basic info submitted to child
      this.submittedBasicInfo = true;
    }
    if (type === 1 && this.testerInfoValid) { // tester info is valid go to next step
      this.successfulSubmit();
    }
    setTimeout(() => {
      this.submittedBasicInfo = false;
    }, 800);
  }

  // VALIDATION WAS COMPLETED AND GOOD TO GO TO NEXT STEP
  successfulSubmit() {
    console.log(this.stepper.selectedIndex);
    this.stepper.selectedIndex = this.type + 1;
  }
}
