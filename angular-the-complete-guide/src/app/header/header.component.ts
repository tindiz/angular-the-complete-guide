import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  @Output() typeSelected = new EventEmitter<string>();

  onSelect(type: string) {
    this.typeSelected.emit(type);
  }
}
