import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators,  } from '@angular/forms';

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
  constructor(private formBuilder: FormBuilder) { }

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
  if(this.submittedFromParent === true){
    this.onSubmit();
  }
}
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log('TRIED TO SUBMIT FROM CHILD');
    console.log(this.registerForm.controls);
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        this.submittedFromParent = true;
        this.allowProgression.emit(false);
    }
    if (!this.registerForm.invalid) {
      this.allowProgression.emit(true);
      console.log('tried to emit');
    }
  }
}
