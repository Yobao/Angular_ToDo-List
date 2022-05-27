import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PRIO_BUTTONS } from 'src/app/pages/create-task/DATA';
import { PrioButtons } from 'src/app/pages/create-task/interface';
import { PrioButtonsService } from 'src/app/services/prio-buttons.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  buttonActivate!: string;
  prioButtons!: PrioButtons;

  @Input() name!: string;
  @Input() i!: number;
  @Input() color!: string;
  @Input() status!: number;

  constructor(private dataPrioButtons: PrioButtonsService) {}

  ngOnInit(): void {
    this.subscription = this.dataPrioButtons.currentButtonState.subscribe(
      (data) => (this.prioButtons = data)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onPriorityClick(e: number) {
    console.log(this.prioButtons);
    if (this.prioButtons.history !== null) {
      this.prioButtons.buttons[this.prioButtons.history].status = 0;
    }
    this.prioButtons.history = e;
    this.prioButtons.buttons[e].status = 1;
    this.dataPrioButtons.changeActiveButton(this.prioButtons);
    console.log(this.prioButtons);
  }
}

/*
maybe this approach of service ???
[
  {name: "Urgent", status: 1, color: "red"},
  {name: "High", status: 0, color: "yelow"},
  {name: "Low", status: 0, color: "blue"},
  {name: "No priority", status: 0, color: "grey"},
]
*/
