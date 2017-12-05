import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from './team';
import { TeamService} from './team.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss'],
})
export class TeamDetailComponent implements OnInit {
  currentTeam: Team;

  constructor(
    private route: ActivatedRoute,
    private service: TeamService
  ) { }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .switchMap(id => this.service.getTeamById(id))
      .subscribe(team => this.currentTeam = team);
  }
}
