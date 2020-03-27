import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AccessibilityComplianceService {

  constructor(private httpClient: HttpClient) { }

    public getFormSchema(): Observable<JSON> {

      let subject = new Subject<JSON>();

      this.httpClient.get('assets/json/508-sections.json').subscribe((results: any) => {

          console.log(results);

          subject.next(results);

      });

      return subject.asObservable();
  }
}
