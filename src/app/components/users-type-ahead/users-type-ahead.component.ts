import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

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
export class UsersTypeAheadComponent {
  public model: string;
  testers: Tester[] = [
    {uid: '23e4as89', email: 'marissa@gmail.com', firstName: 'Marissa', lastName: 'Martucci' },
    {uid: '1987ds9a', email: 'mitchell@gmail.com', firstName: 'Mitchell', lastName: 'Dudley' },
    {uid: '13574sad', email: 'Kerry@gmail.com', firstName: 'Kerry', lastName: 'Egan' },
    {uid: '13574sad', email: 'landon@gmail.com', firstName: 'Landon', lastName: 'Messmer'}
  ];

  formatter = (result: Tester) => result.firstName + " " +  result.lastName;

  search = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    map(term => term === '' ? []
      : this.testers.filter(v => v.firstName.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)),
  )
}
