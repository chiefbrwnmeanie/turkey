import {Component, OnInit, ViewChild, Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource, MatSort} from '@angular/material';
import { Team } from './team';
import { TeamService} from './team.service';
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
  displayedColumns = ['rank', 'name', 'league'];
  // todo: change to observable to allow for data update if allowing edits on page
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: TeamService,
  ) { }

  ngOnInit() {
    this.service.getTeams()
      .subscribe(players => {
        this.teams = players;
        this.dataSource = new MatTableDataSource(this.teams);
      });

    this.route.parent.children
      .find(r => r.outlet === 'detail')
      .params
      .subscribe((params: any) => {
        if (params.id && !isNaN(params.id) ) { this.selectedTeam = +params.id; }
      });
  }

  showTeam(id: number) {
    this.selectedTeam = id;
    this.router.navigate(['/teams', { outlets: {'detail': [id]}}]);
  }
}
