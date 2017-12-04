import { Component, OnInit } from '@angular/core';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
  providers: [ PlayerService ]
})
export class PlayersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
