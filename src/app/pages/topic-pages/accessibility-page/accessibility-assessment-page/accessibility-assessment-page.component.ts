import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  templateUrl: './accessibility-assessment-page.component.html',
  styleUrls: ['./accessibility-assessment-page.component.scss']
})
export class AccessibilityAssessmentPageComponent implements OnInit {
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

    // this.registerForm = new FormGroup({
    //   appName: new FormControl('', Validators.required),
    //   appVersion: new FormControl('', Validators.required),
    //   firstName: new FormControl('', Validators.required),
    //   lastName: new FormControl('', Validators.required),
    //   unit: new FormControl('', Validators.required),
    //   email: new FormControl('', [
    //     [Validators.required, Validators.email]
    //   ]),
    //   password: new FormControl('', Validators.required),
    // });
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
