import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Player} from '../players/player';
import { PlayerService } from '../players/player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
  players: Player[] = [];
  selectedPlayer: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: PlayerService
  ) { }

  // data table
  displayedColumns = ['name'];
  // todo: change to observable to allow for data update if allowing edits on page
  dataSource = new MatTableDataSource(this.service.getPlayers());
  @ViewChild(MatSort) sort: MatSort;


  ngOnInit() {
    this.players = this.service.getPlayers();
    this.route.parent.children
      .find(r => r.outlet === 'detail')
      .params
      .subscribe((params: any) => {
        if (params.id) { this.selectedPlayer = +params.id; }
      });
  }

  showPlayer(id: number) {
    this.selectedPlayer = id;
    this.router.navigate(['/players', { outlets: {'detail': [id]}}]);
  }
}
