import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { App } from 'src/app/models/app.model';

@Component({
  templateUrl: './accessibility-assessment-page.component.html',
  styleUrls: ['./accessibility-assessment-page.component.scss'],
  styles: [':host { width: 100%; margin-bottom: 55px}']
})

export class AccessibilityAssessmentPageComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  apps: App[] = [
    {id: 'A$AP', name: 'A$AP', version: '1.000.001', technology: 'Metastorm 7', division: 'PRO', unit: 'PBUM', workbench: 'a$sap-workbench', active: true, workflowCount: 0},
    {id: 'trophies', name: 'Trophies', version: '1.000.211', technology: 'Metastorm 9', division: 'PRO', unit: 'PBUM', workbench: 'trophies-workbench', active: false, workflowCount: 1},
    {id: 'security-enlightenment', name: 'Security Enlightenment', version: 'plt-1.000.000', technology: 'Pega', division: 'PRO', unit: 'PBUM', workbench: 'sec-enlmnt-workbench', active: false, workflowCount: 0}
  ];
  activeApp: App = this.apps[1];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
      this.registerForm = this.formBuilder.group({
        appName: ['', Validators.required],
        appVersion: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        unit: ['', Validators.required],
        password: ['', Validators.required],
        email: ['', Validators.required, Validators.email],
    });

  }
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    setActive(app: App){
      let index: number;
      index = this.apps.findIndex(x => x.active === true);
      this.apps[index].active = false;
      console.log(this.apps[index]);
      app.active = true;
    }

    onSubmit() {
      this.submitted = true;
      console.log('TRIED TO SUBMIT');
      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
}

}
