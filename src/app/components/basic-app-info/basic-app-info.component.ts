import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { ValidationServiceService } from 'src/app/services/validation-service.service';
import { Subscription } from 'rxjs';
import { app } from 'firebase';
import { App } from 'src/app/models/app.model';

@Component({
  selector: 'app-basic-app-info',
  templateUrl: './basic-app-info.component.html',
  styleUrls: ['./basic-app-info.component.scss']
})
export class BasicAppInfoComponent implements OnInit {
  registerForm: FormGroup;
  @Input() submittedFromParent: boolean;
  @Output() allowProgression = new EventEmitter();
  submitted = false;
  appInfo: App = { name: '', unit: '', division: '', version: '' };
  name: string;
  // validationSubscription: Subscription;

  constructor(private formBuilder: FormBuilder, private validationService: ValidationServiceService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      appName: ['', Validators.required],
      appVersion: ['', Validators.required],
      unit: ['', Validators.required],
      division: ['', Validators.required],
    });
  }

  // WHEN SUBMISSION FROM PARENT IS SENT CHECK VALIDATION
  ngOnChanges(changes: SimpleChanges) {
    if (this.submittedFromParent === true) {
      this.onSubmit();
    }
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  // SET APP INFO IF VALIDATION IS VALID
  setAppInfo() {
    this.appInfo.name = this.registerForm.controls['appName'].value;
    this.appInfo.version = this.registerForm.controls['appVersion'].value;
    this.appInfo.unit = this.registerForm.controls['unit'].value;
    this.appInfo.division = this.registerForm.controls['division'].value;
    this.appInfo.valid = true;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      this.validationService.setBasicInfoValid(false);
    }
    if (!this.registerForm.invalid) {
      this.setAppInfo();
      // console.log(this.appInfo);
      this.validationService.setBasicInfoValid(true);
      this.validationService.setBasicAppInfo(this.appInfo);
    }
  }
}
