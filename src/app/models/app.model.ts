export interface App {
  id?: string;
  name: string;
  version: string;
  technology?: string;
  division: string;
  unit: string;
  valid?: boolean;
  tester?: Tester[];
}

export interface Tester {
  uid: string;
  firstName: string;
  lastName: string;
  email: string;
}
