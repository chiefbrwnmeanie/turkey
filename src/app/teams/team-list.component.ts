import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource, MatSort} from '@angular/material';
import { Team } from './team';
import { TeamsService } from './teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {
  teams: Team[] = [];
  selectedTeam: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: TeamsService
  ) { }

  // data table
  displayedColumns = ['rank', 'name', 'league'];
  // todo: change to observable to allow for data update if allowing edits on page
  dataSource = new MatTableDataSource(this.service.getTeams());
  @ViewChild(MatSort) sort: MatSort;


  ngOnInit() {
    this.teams = this.service.getTeams();
    this.route.parent.children
      .find(r => r.outlet === 'detail')
      .params
      .subscribe((params: any) => {
        if (params.id) { this.selectedTeam = +params.id; }
      });
  }

  showTeam(id: number) {
    this.selectedTeam = id;
    this.router.navigate(['/teams', { outlets: {'detail': [id]}}]);
  }
}
