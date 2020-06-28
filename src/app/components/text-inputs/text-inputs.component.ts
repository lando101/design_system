import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-inputs',
  templateUrl: './text-inputs.component.html',
  styleUrls: ['./text-inputs.component.scss']
})
export class TextInputsComponent implements OnInit {
  id: string;
  inputLabel = 'Lorem Ipsum';
  inputPlaceholder = 'ex. Lorem Ipsum';
  inputValue: string;
  testValidation: boolean;
  numberOfCharacters: number = 0;
  maxNumberOfCharacters: number = 200;
  interaction = {
    textValue: ''
  };
  floatLabelControl = new FormControl('always');
  constructor() { }

  ngOnInit(): void {
  }


  onModelChange(textValue: string): void {
    this.numberOfCharacters = textValue.length;
  }

  onModelValChange(textValue: string): void {
    this.inputValue = textValue;
  }

  testValSubmit(){
    if(this.inputValue === '' || this.inputValue === undefined){
      this.testValidation = false;
      console.log('tried to make it false');
    }
    else if(this.inputLabel !== '' && this.inputLabel !== undefined){
      this.testValidation = true;
      console.log('tried to make it true');
    }

    console.log(this.testValidation + ' :Validation status');
    console.log(this.inputValue + ' :Input value');
  }


}
