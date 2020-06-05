import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

import { Player } from './player';

export class Selection {
    selection: SelectionModel<Player>;
    roster: MatTableDataSource<Player>
}