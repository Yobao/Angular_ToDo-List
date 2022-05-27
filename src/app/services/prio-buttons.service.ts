import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PRIO_BUTTONS } from '../pages/create-task/DATA';
import { PrioButtons } from '../pages/create-task/interface';

@Injectable({
  providedIn: 'root',
})
export class PrioButtonsService {
  prioButtons: PrioButtons = PRIO_BUTTONS;

  constructor() {}

  getDate() {}

  private buttonsArray = new BehaviorSubject(PRIO_BUTTONS);
  currentButtonState = this.buttonsArray.asObservable();

  changeActiveButton(data: PrioButtons) {
    this.buttonsArray.next(data);
  }
}
