import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { InputComponent } from 'src/app/components/input/input.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { MONTH_DAY, MONTH_LIST, INPUTS } from '../../../data/DATA';
import { Task, Month, PrioButtons, Inputs } from '../../../data/interface';
import { MyserviceService } from 'src/app/services/myservice.service';
import { PrioButtonsService } from 'src/app/services/prio-buttons.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent implements OnInit, OnDestroy {
  taskName?: string;
  taskDesc?: string;
  i!: number;
  tasks: any;
  days!: number | string;
  defaultMonth!: string;
  defaultDay!: number;

  months: Array<Month> = MONTH_DAY;
  monthsUpdated: Month[] = [];
  task!: Task;
  taskEvent!: any;
  descEvent!: any;
  daysArray: string[] = [];

  date!: Date;
  subscriptionDate!: Subscription;
  subscriptionPrioButtons!: Subscription;

  priorityButtons!: PrioButtons;

  inputs: Inputs[] = INPUTS;

  constructor(
    private dataDate: MyserviceService,
    private dataPrioButtons: PrioButtonsService
  ) {}

  ngOnInit(): void {
    //Handle default month/day & date arrays...
    //Not elegant solution to push months into new array?...REFACTOR?
    this.subscriptionDate = this.dataDate.currentDate.subscribe(
      (date) => (this.date = date)
    );
    this.defaultDay = this.date.getDate();
    this.months.map((month, i) => {
      if (i >= this.date.getMonth()) {
        this.monthsUpdated.push(month);
      }
    });
    this.defaultMonth = this.monthsUpdated[0].name;
    this.handleUpdateDays(this.defaultMonth);

    this.subscriptionPrioButtons =
      this.dataPrioButtons.currentButtonState.subscribe(
        (data) => (this.priorityButtons = data)
      );
  }

  ngOnDestroy(): void {
    this.subscriptionDate.unsubscribe();
    this.subscriptionPrioButtons.unsubscribe();
  }

  handleUpdateDays(e: string): void {
    this.daysArray = [];
    for (this.i = 0; this.i < MONTH_LIST.length; this.i++) {
      if (e === MONTH_LIST[this.i]) {
        this.days = this.months[this.i].days;
      }
    }

    this.defaultDay =
      e === this.monthsUpdated[0].name ? this.date.getDate() : 1;
    for (this.i = this.defaultDay - 1; this.i < this.days; this.i++) {
      this.daysArray.push((this.i + 1).toString());
    }
  }

  setTask(event: any) {
    if (event.id === 'description') {
      this.taskDesc = event.value;
      this.descEvent = event;
    }
    if (event.id === 'taskName') {
      this.taskName = event.value;
      this.taskEvent = event;
    }
  }

  handleCreateTask(): void {
    //localStorage.clear();
    if (
      !this.taskName ||
      !this.taskDesc ||
      !this.defaultDay ||
      !this.defaultMonth ||
      this.priorityButtons.active === ''
    )
      return alert('Please, fill out all neccessary fields!');

    this.task = {
      name: this.taskName,
      description: this.taskDesc,
      date: new Date(
        this.date.getFullYear(),
        MONTH_LIST.indexOf(this.defaultMonth),
        this.defaultDay
      ),
      priority: this.priorityButtons.active,
      priorityNumber: this.priorityButtons.activeNumber,
      isActive: false,
    };
    if (!localStorage.getItem('Task List')) {
      return localStorage.setItem('Task List', JSON.stringify([this.task]));
    }

    this.tasks = JSON.parse(localStorage.getItem('Task List')!);
    this.tasks.push(this.task);
    localStorage.setItem('Task List', JSON.stringify(this.tasks));
    this.clearInputs();
    alert('Task has been successfully created and moved into ToDo list.');
  }

  clearInputs(): void {
    this.defaultDay = this.date.getDate();
    this.defaultMonth = this.monthsUpdated[0].name;
    this.handleUpdateDays(this.defaultMonth);
    this.priorityButtons.active = '';
    this.priorityButtons.buttons[this.priorityButtons.history].status = 0;
    this.taskEvent.value = '';
    this.descEvent.value = '';
  }
}
