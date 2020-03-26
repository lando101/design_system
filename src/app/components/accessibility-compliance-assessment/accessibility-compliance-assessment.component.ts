import { Component, OnInit } from '@angular/core';
import { AccessibilityComplianceService } from "../../services/accessibility-compliance-data.service";
import { Subscription } from 'rxjs';
import { AccessAssess } from '../../models/508-sections.model';
import {FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';


@Component({
  selector: 'app-accessibility-compliance-assessment',
  templateUrl: './accessibility-compliance-assessment.component.html',
  styleUrls: ['./accessibility-compliance-assessment.component.scss']
})
export class AccessibilityComplianceAssessmentComponent implements OnInit {
  accessibiiltySubscription: Subscription;
  assessmentSections: AccessAssess[] = [];
  isLinear = false;
  formGroup: FormGroup;
  formArray: FormArray;
  // firstFormGroup: FormGroup;
  // secondFormGroup: FormGroup;

  constructor(private accessibilityService: AccessibilityComplianceService, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.accessibiiltySubscription = this.accessibilityService.getFormSchema().subscribe((results: any) => {
      this.assessmentSections = results;
      // console.log(this.assessmentSections);
      // console.log('YAY WE GOT THEM IN AN OBJECT');
    });

    this.assessmentSections.forEach(x =>{
      let form: FormGroup;
      form = this._formBuilder.group({
       d: ['', Validators.required]
      })
    })


    // this.formArray.push
    // );


      this.firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required]
      });
      // this.secondFormGroup = this._formBuilder.group({
      //   secondCtrl: ['', Validators.required]
      // });
    }
  }

