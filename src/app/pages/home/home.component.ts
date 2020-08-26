import { Component, OnInit, HostListener } from '@angular/core';
import { Topic } from '../../models/topics.model';
import { TopicService } from '../../services/topic.service';
import {FooterComponent} from '../../components/footer/footer.component';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: []
})
export class HomeComponent implements OnInit {
  // key: session;
  keyState: string;
  innerWidth: number;
  left: string;
  top: string;
  iconArray: any[] = [{icon: 'fas fa-fingerprint'}, {icon: 'fas fa-users'},
    {icon: 'fas fa-gavel'}, {icon: 'fas fa-map-marked-alt'}, {icon: 'fas fa-shield-alt'},
    {icon: 'fas fa-money-bill-wave'}, {icon: 'fas fa-clipboard-check'}, {icon: 'fas fa-search'},
    {icon: 'fas fa-bell'}, {icon: 'fas fa-magic'}, {icon: 'fas fa-star'}, {icon: 'fas fa-check-double'},
    {icon: 'fas fa-crosshairs'},
  ];
  localTopics: Topic[];
  iconBiggerArray: any[] = [{icon: 'fas fa-fingerprint', left: '5', top: '1', rotate: '35'}];
  tiltSettings: any;
  constructor(private topicService: TopicService) {

  }
  @HostListener('window:resize', ['$event'])

  onResize(event) {
    this.innerWidth = window.innerWidth;
  }
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    for (let i = 0; i < (this.innerWidth / 5); i++) {
      this.iconBiggerArray.push(this.iconArray[this.randomNumber(0, this.iconArray.length)]);
      this.iconBiggerArray[i].left = this.randomNumberPlus(0, this.iconArray.length * 2.2);
      this.iconBiggerArray[i].top = this.randomNumberPlus(0, this.iconArray.length * 2.7);
      this.iconBiggerArray[i].rotate  = (this.randomNumberPlus(0, this.iconArray.length) * 70);
    }
    // GET TOPICS FROM TOPICS SERVICE :: TO BE CHANGED TO JSON
    this.localTopics = this.topicService.getTopics();

    this.tiltSettings =
    {
      reverse: true,  // reverse the tilt direction
      max: 10,     // max tilt rotation (degrees)
      startX: 0,      // the starting tilt on the X axis, in degrees.
      startY: 0,      // the starting tilt on the Y axis, in degrees.
      perspective: 1200,   // Transform perspective, the lower the more extreme the tilt gets.
      scale: 1.04,      // 2 = 200%, 1.5 = 150%, etc..
      speed: 800,    // Speed of the enter/exit transition
      transition: true,   // Set a transition on enter/exit.
      axis: null,   // What axis should be disabled. Can be X or Y.
      reset: true,    // If the tilt effect has to be reset on exit.
      easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
      glare: true,  // if it should have a "glare" effect
      "max-glare": .1,      // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
    }
   }

    randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min));
    }
    randomNumberPlus(min, max) {
      return Math.floor(Math.random() * (max - min)) * 3.33;
    }

    // PREVENT BRAND FROM ANIMATING EVERY PAGE LOAD
    // setLocalStorage() {
    //   this.key = 'welcome-animate';
    //   sessionStorage.setItem(this.key, 'true');
    //   this.getLocalStorage();
    // }
    // GET STORAGE STATE OF ANIMATION
    // getLocalStorage() {
    //   this.keyState = sessionStorage.getItem(this.key);
    //   console.log(this.keyState);
    //   console.log('THIS IS THE KEY STATE');
    //   return this.keyState;
    // }
}
