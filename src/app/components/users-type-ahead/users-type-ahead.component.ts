import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { ValidationServiceService } from 'src/app/services/validation-service.service';

export interface Tester {
  // toLowerCase();
  uid: string;
  email: string;
  firstName: string;
  lastName: string;
  primaryTester?: boolean;
  icon?: string;
  color?: string;
}


@Component({
  selector: 'app-users-type-ahead',
  templateUrl: './users-type-ahead.component.html',
  styleUrls: ['./users-type-ahead.component.scss']
})
export class UsersTypeAheadComponent implements OnInit {
  public model: string;
  testersForm: FormGroup;
  // @Input() submittedFromParent: boolean;
  @Output() allowProgression = new EventEmitter();
  submitted = false;
  selectedTesters: Tester[] = [];
  valid: boolean = false;
  validationSubscription: Subscription;

  testers: Tester[] = [
    { uid: '23e4as89', email: 'marissa@gmail.com', firstName: 'Marissa', lastName: 'Martucci' },
    { uid: '1987ds9a', email: 'mitchell@gmail.com', firstName: 'Mitchell', lastName: 'Dudley' },
    { uid: '13574sad', email: 'kerry@gmail.com', firstName: 'Kerry', lastName: 'Egan' },
    { uid: '13574sad', email: 'landon@gmail.com', firstName: 'Landon', lastName: 'Messmer' },
    { uid: '95we2fe3', email: 'nick@gmail.com', firstName: 'Nicholas', lastName: 'Newman' },
    { uid: 'abc3846e', email: 'will@gmail.com', firstName: 'William', lastName: 'Zurita' }
  ];

  constructor(private formBuilder: FormBuilder, private validationService: ValidationServiceService) { }

  ngOnInit(): void {
    this.testersForm = this.formBuilder.group({
      tester: ['', Validators.required],
    });

    if (this.selectedTesters.length < 1) {
      console.log(this.selectedTesters.length + ' selected testers length');
      this.validationService.setTesterInfoValid(false);
    }
  }

  // convenience getter for easy access to form fields
  get f() { return this.testersForm.controls; }

  // ADD THE TESTER TO CHIP LIST & REMOVE FROM TABLE
  addTester(tester: Tester) {
    this.selectedTesters.push(tester);
    this.testers = this.testers.filter(x => x != tester);
    this.validationService.setTesterInfoValid(true);
    this.validationService.setTesterInfo(tester);
  }

  // REMOVE THE TESTER TO CHIP LIST & ADD FROM TABLE
  removeTester(tester: Tester) {
    this.selectedTesters = this.selectedTesters.filter(x => x != tester);
    this.testers.push(tester);
    if (this.selectedTesters.length === 0) {
      this.validationService.setTesterInfoValid(false);
    }
  }

}
