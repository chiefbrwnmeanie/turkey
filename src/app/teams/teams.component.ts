import { Component, OnInit } from '@angular/core';
import { TeamsService } from './teams.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
  providers: [ TeamsService ]
})
export class TeamsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
