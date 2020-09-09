import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { SidenavDialogComponent } from 'src/app/components/sidenav-dialog/sidenav-dialog.component';
@Component({
  templateUrl: './side-navigation-page.component.html',
  styleUrls: ['./side-navigation-page.component.scss'],
  styles: [':host { width: 100%; margin-bottom: 55px}']
})
export class SideNavigationPageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(SidenavDialogComponent, { panelClass: 'custom-dialog-container' });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit(): void {
  }

}
