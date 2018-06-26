import { Component, Inject, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { POSITIONS } from '../../model/positions';
import { Player } from '../../model/player';
import { HEIGHTS } from '../../model/heights';

@Component({
  selector: 'app-add-player-dialog',
  templateUrl: './add-player-dialog.component.html',
  styleUrls: [
    './add-player-dialog.component.css',
    '../../app.component.css'
  ]
})
export class AddPlayerDialogComponent implements OnInit {

  player: Player;
  positions = POSITIONS;
  heights = HEIGHTS;
  constructor(
    public dialogRef: MatDialogRef<AddPlayerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  
  ngOnInit() {
    this.player = this.data;
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

}
