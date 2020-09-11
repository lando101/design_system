import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SideNav } from 'src/app/models/sidenav.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sidenav-edit-dialog',
  templateUrl: './sidenav-edit-dialog.component.html',
  styleUrls: ['./sidenav-edit-dialog.component.scss']
})
export class SidenavEditDialogComponent implements OnInit {
  // Stepper variables
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  tabFormGroup: FormGroup;


  sideNavData: SideNav;
  numberOfCharacters: number = 0;
  maxNumberOfCharacters: number = 200;
  constructor(
    public dialogRef: MatDialogRef<SidenavEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder: FormBuilder) { }


  onNoClick(): void {
    this.dialogRef.close();
  }

  // USED FOR CHARACTER COUNT
  onModelChange(textValue: string): void {
    this.numberOfCharacters = textValue.length;
  }



  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    this.firstFormGroup = this._formBuilder.group({
      // firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      // secondCtrl: ['', Validators.required]

    });
    this.tabFormGroup = this._formBuilder.group({
      // secondCtrl: ['', Validators.required]

    });
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    this.firstFormGroup = this._formBuilder.group({
      // firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      // secondCtrl: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.sideNavData = this.data.sideNav;
    console.log(this.data.sideNav);

    // this.firstFormGroup = this._formBuilder.group({
    //   // firstCtrl: ['', Validators.required]
    // });
    // this.secondFormGroup = this._formBuilder.group({
    //   // secondCtrl: ['', Validators.required]
    // });
  }

  addStandardMeta(){
    let metaNumber = this.sideNavData.strdMeta.length + 1;
    let id ='strd' + metaNumber;
    let label = 'Label ' + metaNumber;
    this.sideNavData.strdMeta.push(
      {id: id, desc: label, content:'Lorem ipsum', important: false, badge: false, layout: 'inline', type: 'standard'},
    )
  }

  addLongMeta(){
    let metaNumber = this.sideNavData.longMeta.length + 1;
    let id ='strd' + metaNumber;
    let label = 'Long Text Label ' + metaNumber;
    this.sideNavData.longMeta.push(
      {id: id, desc: label, content:'Lorem ipsum', important: false, badge: false, layout: 'inline', type: 'standard'},
    )
  }

  addImportantMeta(){
    let metaNumber = this.sideNavData.imprtMeta.length + 1;
    let id ='imprt' + metaNumber;
    let label = 'Desc Label ' + metaNumber;
    this.sideNavData.imprtMeta.push(
      {id: id, desc: label, content:'Important info', important: true, badge: false, layout: 'block', type: 'highlight'}
    )
  }

}
