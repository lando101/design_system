import { Type } from '@angular/core';

export interface PageContent {
  name: string;
  id: string;
  type: string;
  icon?: string;
  comp?: Type<any>;
  selector?: string;
}
