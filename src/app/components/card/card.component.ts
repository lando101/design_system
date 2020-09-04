import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { Card } from 'src/app/models/card.model';
import { Option } from 'src/app/models/option.model';

// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA}

// export interface Card {
//   id: string;
//   title: string;
//   icon?: string;
//   option: Option[];
// }

// export interface Option {
//   optionTitle: string;
//   optionSubtitle: string;
//   icon: string;
// }

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  options: Option[] =[];
  cards:Card[] = [{id: 'card1', title: 'Card title', icon: 'fas fa-wrench', color: '', options:[{optionTitle:'Option title', optionSubtitle: 'Option subtitle', icon:'fas fa-user', color: ''}]}];
  editVisible = true;
  constructor(public dialog: MatDialog) { }

  openDialog(card: Card): void {
    let dialogRef = this.dialog.open(EditDialogComponent, {
      width: '450px',
      data: { id: card.id, title: card.title, options: card.options, icon: card.icon, color: card.color }
    });

    dialogRef.afterClosed().subscribe(result => {
      let card: Card = result;
      console.log(card);
      console.log('The dialog was closed');
      this.cards[this.cards.findIndex(e => e.id === card.id)] = card;
    });
  }

  ngOnInit(): void {
  }

  // ADD A NEW CARD
  addCard(){
    const id = "card" + (this.cards.length + 1).toString();
    const newCard = {id: id, title: 'Card title', icon: 'fas fa-wrench', color: '', options:[{optionTitle:'Option title', optionSubtitle: 'Option subtitle', icon:'fas fa-user', color: ''}]};
    this.cards.push(newCard);
  }

   // REMOVE LAST CARD
   removeCard(){
    this.cards.pop();
  }

}
