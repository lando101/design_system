import { Component, OnInit, DoCheck, OnChanges, NgModule, HostListener, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from "@angular/common";
import { FormsModule, FormControl } from "@angular/forms";


@Component({
  templateUrl: './buttons-page.component.html',
  styleUrls: ['./buttons-page.component.scss'],
  styles: [':host { width: 100%; margin-bottom: 55px}']
})
export class ButtonsPageComponent implements DoCheck {

  buttonLabel = 'Lorem Ipsum';
  buttonIcon = 'fas fa-wrench'
  floatLabelControl = new FormControl('always');
  windowScrolled: boolean;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  @HostListener("window:scroll", ['$event'])
  onWindowScroll($event) {
    // console.log('entered window scroll function');
    console.log($event);
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
      this.windowScrolled = true;
      console.log(document.documentElement.scrollTop);
    }
    else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
      this.windowScrolled = false;
      // console.log('Hello');
      console.log(document.body.scrollTop);
    }
  }


  onScroll($event){
    console.log('scroll happened');
    console.log(this.document.documentElement.scrollHeight);
    console.log(window.pageYOffset);
    console.log($event.scrollTop);
  }
  // constructor() { }




  ngDoCheck() {
    // console.log('Running change detection ', Date.now());
  }




  // scrollToTop() {
  //   console.log('tried to scroll top');
  //   (function smoothscroll() {

  //     var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

  //     if (currentScroll > 0) {
  //       window.requestAnimationFrame(smoothscroll);
  //       window.scrollTo(0, currentScroll - (currentScroll / 8));
  //     }

  //   })();
  // }

  ngOnInit(): void {
  }
}
