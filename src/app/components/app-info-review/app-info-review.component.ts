import { Component, OnInit, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { ValidationServiceService } from 'src/app/services/validation-service.service';
import { Subscription } from 'rxjs';
import { Tester } from 'src/app/models/tester.model';
import { App } from 'src/app/models/app.model';

@Component({
  selector: 'app-app-info-review',
  templateUrl: './app-info-review.component.html',
  styleUrls: ['./app-info-review.component.scss']
})
export class AppInfoReviewComponent implements OnInit {
  validationBasicInfoSubscription: Subscription;
  validationTesterInfoSubscription: Subscription;
  testers: Tester[] = [{uid: '', email: '', firstName: '', lastName: ''}];
  app: App = { name: '', unit: '', division: '', version: '' };

  constructor(private validationService: ValidationServiceService) { }

  ngOnInit(): void {
      // SUBSCRIBE TO SEE IF BASIC INFO IS VALID OR NOT
      this.validationBasicInfoSubscription = this.validationService.basicAppInfo$.subscribe(data => {
        if (data) {
          console.log('REVIEW COMPONENT APP DATA');
          console.log(data);
          this.app = data;
        }
      });

      // SUBSCRIBE TO SEE IF BASIC INFO IS VALID OR NOT
      this.validationTesterInfoSubscription = this.validationService.testerAppInfo$.subscribe(data => {
        if (data) {

          this.testers.push(data);
          console.log('TESTER INFO DATA' + this.testers);
          // this.successfulSubmit();
        }
      });
  }

}
