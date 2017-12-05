import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Player} from '../players/player';
import { PlayerService } from '../players/player.service';
import { Subscription} from 'rxjs/Subscription';
import 'rxjs/operators/map';
import 'rxjs/operators/filter';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit, AfterViewInit {

  players: Player[] = [];
  selectedPlayer: number;
  private _teamId;
  private subscription: Subscription;

  @Input()
  set teamId(teamId: number) { this._teamId = (teamId); }
  get teamId(): number { return this._teamId; }

  // data table
  displayedColumns = ['name', 'teamName', 'pins'];
  dataSource: MatTableDataSource<Player>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: PlayerService,
  ) { }

  ngOnInit() {
    this.subscription = this.service.onLoaded.subscribe((message) => {
      this.teamId = message;
      this.showPlayers();
    });
    this.showPlayers();
  }

  ngAfterViewInit() {
    //console.log("ok done");
  }

  showPlayers() {
    this.service.getPlayers()
      .subscribe(players => {
        this.players = players;
        if (this.teamId) {
          this.players = players.filter(players => players.teamId === this._teamId );
        }
        // todo: clean up to use lifecycle hook afterviewinit?
        this.dataSource = new MatTableDataSource<Player>(this.players);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
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
    this.router.navigate(['/players', { outlets: {'detail': [id]}}]);
  }

}
