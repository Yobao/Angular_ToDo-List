import { NodeWithI18n } from '@angular/compiler';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MONTH_LIST, DAY_LIST } from 'src/app/pages/create-task/DATA';

@Component({
  selector: 'header-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit, OnDestroy {
  constructor() {}

  dateTime!: string;
  now: Date = new Date(Date.now());
  Months = MONTH_LIST;
  Days = DAY_LIST;

  /*   Months: string[] = [
    'Január',
    'Február',
    'Marec',
    'Apríl',
    'Máj',
    'Jún',
    'Júl',
    'August',
    'September',
    'Október',
    'November',
    'December',
  ]; */

  ngOnInit(): void {
    setInterval(() => {
      this.now = new Date(Date.now());
      this.dateTime = `${
        this.Days[this.now.getDay()]
      }, ${this.now.getDate()}. ${
        this.Months[this.now.getMonth()]
      } ${this.now.getFullYear()}, ${this.now.getHours()}:${this.now.getMinutes()}:${this.now.getSeconds()}`;
    }, 1000);
  }

  ngOnDestroy(): void {}
}
