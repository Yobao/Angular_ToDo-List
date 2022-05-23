import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyserviceService {
  constructor() {}

  //Seemingly harder way to pass Service data.
  //private dateSource = new BehaviorSubject<string>('Jún');
  //currentDate = this.dateSource.asObservable();
  /*   changeDate(date: string) {
    this.dateSource.next(date);
  } */
  /* 
  EASIER WAY TO DO SAME THING.. 
  currentDate = new Date(Date.now());

  getDate() {
    return new Date(Date.now());
  } */

  getDate() {}

  private dateSource = new BehaviorSubject(new Date(Date.now()));
  currentDate = this.dateSource.asObservable();

  changeDate(date: Date) {
    this.dateSource.next(date);
  }
}
