import { Injectable } from '@angular/core';
//import { BehaviorSubject } from 'rxjs';

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

  currentDate = new Date(Date.now());

  getDate() {
    return new Date(Date.now());
  }
}
