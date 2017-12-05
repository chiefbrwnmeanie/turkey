import {Component, OnInit, ViewChild, Input, EventEmitter, Output} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { Team } from './team';
import { TeamService} from './team.service';
import { PlayerService} from '../players/player.service';

import 'rxjs/operators/map';

@Component({
  selector: 'app-teams',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {
  teams: Team[] = [];
  selectedTeam: number;

  // data table
  dataSource: MatTableDataSource<Team>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['rank', 'name', 'league', 'teamAvg'];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: TeamService,
    private playerService: PlayerService,
  ) { }

  ngOnInit() {
    this.service.getTeams()
      .subscribe(players => {
        this.teams = players;
        this.dataSource = new MatTableDataSource(this.teams);
        this.dataSource.paginator = this.paginator;
      });

    this.route.parent.children
      .find(r => r.outlet === 'detail')
      .params
      .subscribe((params: any) => {
        if (params.id && !isNaN(params.id) ) { this.selectedTeam = +params.id; }
      });
  }

  showTeam(id: number) {

    this.playerService.onLoaded.emit(id);

    this.selectedTeam = id;
    this.router.navigate(['/teams', { outlets: {'detail': [id]}}]);
  }
}
