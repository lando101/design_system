import {Tester} from './tester.model';

export interface App {
  id?: string;
  name: string;
  version: string;
  technology?: string;
  division: string;
  unit: string;
  valid?: boolean;
  tester?: Tester[];
  workbench?: string;
  active?: boolean;
  workflowCount?: number;
}


