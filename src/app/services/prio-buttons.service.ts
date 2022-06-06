import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PRIO_BUTTONS } from '../../data/DATA';
import { PrioButtons } from '../../data/interface';

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
