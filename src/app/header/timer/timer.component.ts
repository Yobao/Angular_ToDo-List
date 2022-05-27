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

  constructor(private dataDate: MyserviceService) {}

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.subscription = this.dataDate.currentDate.subscribe(
        (date) => (this.date = new Date(Date.now()))
      );
      this.dataDate.changeDate(new Date(Date.now()));
    }, 1000);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  newDate() {
    this.dataDate.changeDate(new Date(Date.now()));
  }
}
