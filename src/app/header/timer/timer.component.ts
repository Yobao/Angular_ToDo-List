import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  constructor() {}

  date: Date = new Date(Date.now());

  ngOnInit(): void {
    setInterval(() => {
      this.date = new Date(Date.now());
    }, 1000);
  }

  ngOnDestroy(): void {}
}
