import { Injectable } from '@angular/core';
import { BehaviorSubject,  Observable, Subject } from "rxjs";
import { App } from '../models/app.model';

@Injectable({
  providedIn: 'root'
})
export class ValidationServiceService {
  // APP INFO VARIABLES
  basicInfoValidation = new Subject<boolean>();
  basicInfoValidationStatus$ = this.basicInfoValidation.asObservable();
  basicInfo = new Subject<App>();
  basicAppInfo$ = this.basicInfo.asObservable();

  // TESTER INFO VARIABLES
  testerInfoValidation = new Subject<boolean>();
  testerInfoValidationStatus$ = this.testerInfoValidation.asObservable();
  testerInfo = new Subject<App>();
  testerAppInfo$ = this.testerInfo.asObservable();

  constructor() { }

  // SET VALIDATION STATUS FOR BASIC INFO
  setBasicInfoValid(valid: boolean){
    console.log('BASIC INFO VALIDATION SERVICE' + valid);
    this.basicInfoValidation.next(valid);
  }

  // SET APP INFORMATION
  setBasicAppInfo(app: App){
    this.basicInfo.next(app);
  }

  // SET VALIDATION STATUS FOR TESTER INFO
  setTesterInfoValid(valid: boolean){
    console.log('BASIC TESTER VALIDATION SERVICE' + valid);
    this.testerInfoValidation.next(valid);
  }

  // SET APP TESTER INFORMATION
  setTesterInfo(app: App){
    this.testerInfo.next(app);
  }
}
