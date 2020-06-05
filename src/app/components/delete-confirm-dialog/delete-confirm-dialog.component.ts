import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Selection } from '../../model/selection';
import { Player } from '../../model/player';

@Component({
  selector: 'app-delete-confirm-dialog',
  templateUrl: './delete-confirm-dialog.component.html',
  styleUrls: ['./delete-confirm-dialog.component.css']
})
export class DeleteConfirmDialogComponent implements OnInit {

  constructor(
      public dialogRef: MatDialogRef<DeleteConfirmDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Selection) { }

    onNoClick(): void {
      this.dialogRef.close();
    }
    onYesClick(): void {
      for(let selection of this.data.selection.selected) {
        let index = this.data.roster.data.indexOf(selection);
        this.data.roster.data.splice(index, 1);
      }
      this.data.roster._updateChangeSubscription();
      this.data.selection.clear();
      this.dialogRef.close();
    }

  ngOnInit() {
    console.log(this.data);
  }

}
