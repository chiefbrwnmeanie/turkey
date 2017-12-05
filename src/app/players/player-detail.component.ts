import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Player } from './player';
import { PlayerService } from './player.service';
import {MatTableDataSource} from '@angular/material';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})
export class PlayerDetailComponent implements OnInit {
  @Input()
  currentPlayer: Player;

  constructor(
    private route: ActivatedRoute,
    private service: PlayerService
  ) { }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .switchMap(id => this.service.getPlayerById(id))
      .subscribe(player => this.currentPlayer = player);
  }
}
