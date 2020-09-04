import { Component, OnInit } from '@angular/core';
import FontawesomeJson from '../../../assets/json/font-awesome-icons.json';
import { HttpClient } from "@angular/common/http";
import { Icon } from 'src/app/models/icon.model';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-font-awesome-search',
  templateUrl: './font-awesome-search.component.html',
  styleUrls: ['./font-awesome-search.component.scss']
})
export class FontAwesomeSearchComponent implements OnInit {
  iconJSONArray: any = [];
  icons: Icon[]=[];

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
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
    });

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): Icon[] {
    const filterValue = value.toLowerCase();

    return this.icons.filter(icon => icon.name.toLowerCase().includes(filterValue));
  }

}
