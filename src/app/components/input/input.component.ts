import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  constructor() {}

  @Input() placeH?: string;
  @Input() id?: string;
  @Input() title?: string;

  @Output() task = new EventEmitter<Event>();

  setTask(event: any) {
    this.task.emit(event.target);
  }

  ngOnInit(): void {}
}
