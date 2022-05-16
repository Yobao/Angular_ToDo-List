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

  @Output() task = new EventEmitter<string>();

  setTask(val: any) {
    this.task.emit(val);
  }

  ngOnInit(): void {}
}
