import { Component, OnInit, OnDestroy } from '@angular/core';
import { MyserviceService } from 'src/app/services/myservice.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'header-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit, OnDestroy {
  date!: Date;
  subscription!: Subscription;
  timer!: any;

  constructor(private data: MyserviceService) {}

  ngOnInit(): void {
    /*     setInterval(() => {
      this.date = new Date(Date.now());
    }, 1000); */

    /*     this.timer = setInterval(() => {
      this.subscription = this.data.currentDate.subscribe(
        (date) => (this.date = date)
      );
    }, 1000); */

    this.timer = setInterval(() => {
      this.subscription = this.data.currentDate.subscribe(
        (date) => (this.date = new Date(Date.now()))
      );
      this.data.changeDate(new Date(Date.now()));
    }, 1000);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  newDate() {
    this.data.changeDate(new Date(Date.now()));
  }
}
