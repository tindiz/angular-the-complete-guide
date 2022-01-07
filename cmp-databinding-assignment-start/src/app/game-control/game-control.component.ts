import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameStartedEvent = new EventEmitter<number>();
  gameInterval;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    let counter = 0;
    clearInterval(this.gameInterval);
    this.gameInterval = setInterval(() => {
      counter++;
      this.gameStartedEvent.emit(counter);
    }, 1000);
  }
  onEndGame() {
    clearInterval(this.gameInterval);
  }

}
