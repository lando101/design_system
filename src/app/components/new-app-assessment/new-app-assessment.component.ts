import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-app-assessment',
  templateUrl: './new-app-assessment.component.html',
  styleUrls: ['./new-app-assessment.component.scss']
})
export class NewAppAssessmentComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
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
