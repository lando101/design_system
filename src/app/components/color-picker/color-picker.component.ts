import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ColorEvent } from 'ngx-color';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {
  state = '#000000';
  // @Input() object: any;
  @Output() objectChange = new EventEmitter<any>();

  focus: any;
  constructor() { }

  // ANYTHING USING THIS COMPONENT NEEDS AN ATTRIBUTE CALLED COLOR
  changeComplete($event: ColorEvent){
    console.log($event.color);
    this.state = $event.color.hex;
    // this.object.color = $event.color.hex;

    this.objectChange.emit($event);
  }

  ngOnInit(): void {
    console.log(document.getElementsByClassName('swatch'))
    let x = document.getElementsByClassName('swatch');

    this.focus = x;

    console.log(x[0]);
    // setTimeout(() => {
    //   document.getElementById("swatch1").focus();
    // }, 500);
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.

    this.focus[0].setAttribute("id", "swatch1");
  }


  setFocus(){
    console.log(document.getElementsByClassName('swatch'))
    let x = document.getElementsByClassName('swatch');

    this.focus = x;

    this.focus[0].setAttribute("id", "swatch1");
    console.log(x[0]);
  }
}
