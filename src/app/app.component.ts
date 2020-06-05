import { Component, OnInit, ViewChild, Inject } from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';

import { SelectionModel } from '@angular/cdk/collections';

import { Player } from './model/player';
import { POSITIONS } from './model/positions';
import { HEIGHTS } from './model/heights';
import { ROSTER } from './data/roster';

import { DeleteConfirmDialogComponent } from './components/delete-confirm-dialog/delete-confirm-dialog.component';
import { AddPlayerDialogComponent } from './components/add-player-dialog/add-player-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  displayedColumns = [
    'select',
    'pictureCls',
    'number',
    'playerName',
    'pos',
    'batArm',
    'throwArm',
    'height',
    'weight',
    'age',
    'experience',
    'birthplace',
    'college',
    'salary',
    'category',
    'actions'
  ];
  heights = HEIGHTS;
  positions = POSITIONS;
  ROSTER_DATA = ROSTER;
  dataSource = new MatTableDataSource<Player>(ROSTER);
  selection = new SelectionModel<Player>(true, []);
  rowEditing: Player[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  editRow(player: Player) {
    player.editing = true;
  }
  cancelEditRow(player: Player) {
    player.editing = false;
  }
  saveEditRow(player: Player) {
    player.editing = false;
  }

  constructor(public dialog: MatDialog) {}

  openConfirmDialog() {
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
    });

  }

  openAddPlayerDialog() {
    const dialogRef = this.dialog.open(AddPlayerDialogComponent, {
      width: '500px',
      data: new Player()
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
    });

  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

}


