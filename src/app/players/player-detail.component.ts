import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Player } from './player';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})
export class PlayerDetailComponent implements OnInit {
  currentPlayer: Player;

  constructor(
    private route: ActivatedRoute,
    private service: PlayerService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: {id: string}) => {
      this.currentPlayer = this.service.getPlayerById(params.id);
    });
  }
}
