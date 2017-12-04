import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';

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
