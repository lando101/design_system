import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import FontawesomeJson from '../../../assets/json/font-awesome-icons.json';
import { HttpClient } from "@angular/common/http";
import { Icon } from 'src/app/models/icon.model';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface IconSelection {
  class: string;
  color: string;
}

@Component({
  selector: 'app-font-awesome-search',
  templateUrl: './font-awesome-search.component.html',
  styleUrls: ['./font-awesome-search.component.scss']
})

// for this component just send in a font-awesome class and it will handle the rest
export class FontAwesomeSearchComponent implements OnInit {
  @Input() currentClass: string = '';
  @Input() currentColor: string = '';
  @Output() iconSelection = new EventEmitter<any>();
  iconJSONArray: any = [];
  icons: Icon[]=[]; // stores all icons from json
  icon: IconSelection = {class: '', color: ''}; // stores selection attributes
  color: string = '';
  myControl = new FormControl();
  filteredOptions: Observable<Icon[]>;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("/assets/json/font-awesome-icons.json").subscribe(data => {
      // @ts-ignore
      console.log(data);

      // @ts-ignore
      data.solid.forEach(element => {
        this.icons.push({
          name: element,
          class: 'fas fa-'+element,
          type: 'Solid'
        });
      });

      // @ts-ignore
      data.brands.forEach(element => {
        this.icons.push({
          name: element,
          class: 'fab fa-'+element,
          type: 'Brands'
        });
      });
      console.log(this.icons);
      this.iconMatch(this.currentClass);
    });

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  // FINDS ICON MATCH BETWEEN ARRAY AND INPUT
  iconMatch(currentClass: any){
    let match = this.icons.find(element => element.class === currentClass);
    if(match){
      this.myControl.setValue(match.name);

      this.icon.class = match.class;
      this.icon.color = this.currentColor;
    }
  }

  // SETS VALUE OF INPUT WHEN SELECTION MADE
  iconChange(event:any){
    this.myControl.setValue(event.option.value.name)
    this.icon.class = event.option.value.class;
    this.iconSelection.emit(this.icon);
  }

  // SETS COLOR OF ICON
  colorSelected(event: any){
    const color = event.color.hex;
    // this.color = color;
    this.icon.color = color;
    this.iconSelection.emit(this.icon);
  }
  private _filter(value: string): Icon[] {
    const filterValue = value.toLowerCase();

    return this.icons.filter(icon => icon.name.toLowerCase().includes(filterValue));
  }

}
