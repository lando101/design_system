
import { Component } from '@angular/core';
import { AccessibilityComplianceAssessmentComponent } from './components/accessibility-compliance-assessment/accessibility-compliance-assessment.component'
import { AccessibilityTestComponent } from './components/accessibility-test/accessibility-test.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'style-guide-app';


}
