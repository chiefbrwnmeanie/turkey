import { Component, OnInit } from '@angular/core';
import { TeamService } from './team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
  providers: [ TeamService ]
})
export class TeamsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
