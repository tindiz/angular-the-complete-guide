import {AfterContentChecked, AfterContentInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked {
  @Input() element: {type: string, name: string, content: string};
  @Input() name: string;
  constructor() {
    console.log('Constructor called.');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called.');
  }

  ngOnInit() {
    console.log('ngOnInit called.');
  }

  ngDoCheck() {
    console.log('ngDoCheck called.');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called.');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called.');
  }
}
