import { Component, OnInit, ViewChild, Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Player} from '../players/player';
import { PlayerService } from '../players/player.service';
import 'rxjs/operators/map';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
  players: Player[] = [];
  selectedPlayer: number;
  private _teamId = 0;

  @Input()
  set teamId(teamId: number) { this._teamId = (teamId); }
  get teamId(): number { return this._teamId; }

  // data table
  displayedColumns = ['name', 'teamName', 'pins'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: PlayerService,
  ) { }

  ngOnInit() {
   // this.players = this.service.getPlayers(this._teamId);
    this.service.getPlayers()
      .subscribe(players => {
        this.players = players;
        this.dataSource = new MatTableDataSource(this.players);
      });

    this.route.parent.children
      .find(r => r.outlet === 'detail')
      .params
      .subscribe((params: any) => {
        if (params.id && !isNaN(params.id) ) { this.selectedPlayer = +params.id; }
      });
  }

  showPlayer(id: number) {
    this.selectedPlayer = id;
    console.log(this.selectedPlayer);
    this.router.navigate(['/players', { outlets: {'detail': [id]}}]);
  }

}
