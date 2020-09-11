import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SideNav } from 'src/app/models/sidenav.model';

@Component({
  selector: 'app-sidenav-edit-dialog',
  templateUrl: './sidenav-edit-dialog.component.html',
  styleUrls: ['./sidenav-edit-dialog.component.scss']
})
export class SidenavEditDialogComponent implements OnInit {
  sideNavData: SideNav;
  numberOfCharacters: number = 0;
  maxNumberOfCharacters: number = 200;
  constructor(
    public dialogRef: MatDialogRef<SidenavEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  onNoClick(): void {
    this.dialogRef.close();
  }
  onModelChange(textValue: string): void {
    this.numberOfCharacters = textValue.length;
  }
  ngOnInit(): void {
    this.sideNavData = this.data.sideNav;
    console.log(this.data.sideNav);
  }

}
