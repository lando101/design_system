import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ColorEvent } from 'ngx-color';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {

  state = '#000000';

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addOption(){
    this.data.options.push({optionTitle:'Option title', optionSubtitle: 'Option subtitle', icon:'fas fa-user', color: ''});
  }

  changeComplete($event: any, option?: any){
    if(option){
      this.state = $event.color.hex;
      option.color = $event.color
      option.icon = $event.class;
    } else{
        this.data.color = $event.color;
        this.data.icon = $event.class;
    }
    console.log($event);
    console.log('GOT EMIT');
  }

  print(event: any){
    console.log(event);
  }

  ngOnInit(): void {
  }

}
