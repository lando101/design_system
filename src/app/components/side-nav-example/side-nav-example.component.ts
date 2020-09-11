import { Component, OnInit, Input } from '@angular/core';
import { SideNav } from 'src/app/models/sidenav.model';

@Component({
  selector: 'app-side-nav-example',
  templateUrl: './side-nav-example.component.html',
  styleUrls: ['./side-nav-example.component.scss']
})
export class SideNavExampleComponent implements OnInit {
  @Input() sideNavData: SideNav;
  constructor() { }

  ngOnInit(): void {
    // console.log(this.sideNavData);
    // console.log('Side nav got the data');

    if(!this.sideNavData){
      // IF NO DATA IS RECEIVED USE THIS DATA INSTEAD :: USED IN FULL SCREEN VIEW
      this.sideNavData = {
        caseId: 'Case ID',
        caseName: 'Case Name',
        icon: 'far fa-star',
        tabs:[
          {tabName: 'Comments', count: 5, order: 0, href: 'comments'},
          {tabName: 'History', order: 1, href: 'history'},
          {tabName: 'Details', order: 2, href: 'details'},
        ],
        strdMeta: [
          {desc: 'Badge Label', content:'Status', important: false, badge: true, layout: 'inline', class: 'pimary', type: 'standard'},
          {desc: 'Label 1', content:'Lorem ipsum', important: false, badge: false, layout: 'inline', type: 'standard'},
          {desc: 'Label 2', content:'Lorem ipsum', important: false, badge: false, layout: 'inline', type: 'standard'},
        ],
        imprtMeta: [
          {desc: 'Desc Label', content:'Important info', important: true, badge: false, layout: 'block', type: 'highlight'}
        ],
        longMeta: [
          {desc: 'Long Text Label',
            content:'Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Lorem sint.',
            important: false, badge: false, layout: 'block', type: 'paragraph'
          }
        ],
        actionButtons: [
          {id: 'actions', label: 'Actions', dropDown: true, order: 0},
        ]
      };
    }
  }

}
