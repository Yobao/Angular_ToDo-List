import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyserviceService {
  constructor() {}

  getDate() {}

  private dateSource = new BehaviorSubject(new Date(Date.now()));
  currentDate = this.dateSource.asObservable();

  changeDate(date: Date) {
    this.dateSource.next(date);
  }
}
