import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddValues = [];
  evenValues = [];

  onGameStarted(value) {
    if (value % 2 === 0) {
      this.evenValues.push(value);
    } else {
      this.oddValues.push(value);
    }
  }
}
