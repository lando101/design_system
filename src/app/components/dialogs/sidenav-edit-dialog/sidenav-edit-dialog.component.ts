import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-sidenav-edit-dialog',
  templateUrl: './sidenav-edit-dialog.component.html',
  styleUrls: ['./sidenav-edit-dialog.component.scss']
})
export class SidenavEditDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SidenavEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
