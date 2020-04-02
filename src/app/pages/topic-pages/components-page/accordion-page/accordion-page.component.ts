import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-page',
  templateUrl: './accordion-page.component.html',
  styleUrls: ['./accordion-page.component.scss'],
  styles: [':host { width: 100%; margin-bottom: 55px}']
})

export class AccordionPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
