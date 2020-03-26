export interface The508Sections {
  "508-section": The508Section[];
}

export interface The508Section {
  "question-text": string;
  requirement:     number;
  order:           number;
  "wcag-criteria": string;
  scoreOne:        string;
  scoreThree:      string;
  scoreFive:       string;
  recievedRanking: null;
  blind:           Ambbulatory[];
  lowVision:       Ambbulatory[];
  colorBlind:      Ambbulatory[];
  ambbulatory:     Ambbulatory[];
  deaf:            Ambbulatory[];
  cognitive:       Ambbulatory[];
  seizures:        Ambbulatory[];
  instructions:    Instruction[];
}

export interface Ambbulatory {
  displayName: string;
  tooltip:     string;
  status:      boolean;
}

export interface Instruction {
  header:    string;
  step:      Step[];
  subHeader: string;
  note:      string;
}

export interface Step {
  step1: string;
  step2: string;
  step3: string;
  step4: string;
  step5: string;

}
