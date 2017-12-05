import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from './team';
import { TeamsService } from './teams.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss'],
})
export class TeamDetailComponent implements OnInit {
  currentTeam: Team;

  constructor(
    private route: ActivatedRoute,
    private service: TeamsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: {id: string}) => {
      this.currentTeam = this.service.getTeamById(params.id);
    });
  }

}
