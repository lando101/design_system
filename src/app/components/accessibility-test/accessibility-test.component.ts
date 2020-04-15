import { Component, OnInit } from '@angular/core';
import { AccessibilityComplianceService } from "../../services/accessibility-compliance-data.service";
import { Subscription } from 'rxjs';
import { AccessAssess } from '../../models/508-sections.model';
import {FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
// import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';

@Component({
  selector: 'app-accessibility-test',
  templateUrl: './accessibility-test.component.html',
  styleUrls: ['./accessibility-test.component.scss']
})
export class AccessibilityTestComponent implements OnInit {
  testInfoGroup: FormGroup;
  questionOneGroup: FormGroup;
  isLinear = false;

  constructor(private formBuilder: FormBuilder, private accessibilityService: AccessibilityComplianceService, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // REQUIRE VALIDATION FOR BASIC APP INFO
    this.testInfoGroup = this.formBuilder.group({
      testInfo: ['', Validators.nullValidator],
    });
    this.questionOneGroup = this.formBuilder.group({
      appInfo: ['', Validators.nullValidator],
    });
  }

}
