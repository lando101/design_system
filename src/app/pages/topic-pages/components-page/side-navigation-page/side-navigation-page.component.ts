import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { SidenavDialogComponent } from 'src/app/components/sidenav-dialog/sidenav-dialog.component';
import { SidenavEditDialogComponent } from 'src/app/components/dialogs/sidenav-edit-dialog/sidenav-edit-dialog.component';
import { SideNav } from 'src/app/models/sidenav.model';


@Component({
  templateUrl: './side-navigation-page.component.html',
  styleUrls: ['./side-navigation-page.component.scss'],
  styles: [':host { width: 100%; margin-bottom: 55px}']
})
export class SideNavigationPageComponent implements OnInit {
  sideNavData: SideNav = {
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
  constructor(public dialog: MatDialog) { }

  openFullScreenDialog() {
    const dialogRef = this.dialog.open(SidenavDialogComponent, { panelClass: 'custom-dialog-container' });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openEditSidenav() {
    const dialogRef = this.dialog.open(SidenavEditDialogComponent, {
      width: '450px',
      data: { sideNav: this.sideNavData }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit(): void {
  }

}
