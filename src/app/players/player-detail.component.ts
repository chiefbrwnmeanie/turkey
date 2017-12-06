import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Player } from './player';
import { PlayerService } from './player.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})
export class PlayerDetailComponent implements OnInit {
  @Input()
  currentPlayer: Player;

  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private service: PlayerService
  ) { }

  ngOnInit() {
    this.showPlayerById();
    /*
    this.subscription = this.service.onLoaded.subscribe((message) => {
      console.log(message);
      if ( this.route.params['id'] ) {
        this.showPlayerById();
      }
    });
    */
  }

  showPlayerById() {
    this.route.params
      .map(params => params['id'])
      .switchMap(id => this.service.getPlayerById(id))
      .subscribe(player => this.currentPlayer = player);
  }
}
