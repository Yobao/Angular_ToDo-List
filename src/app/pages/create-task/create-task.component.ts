import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { InputComponent } from 'src/app/components/input/input.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { MONTH_DAY } from './DATA';
import { Task, Month } from './interface';
import { MyserviceService } from 'src/app/services/myservice.service';
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

  public months: Array<Month> = MONTH_DAY;
  monthsUpdated: Month[] = [];
  task: Task = { name: '', description: '' };
  daysArray: string[] = [];

  date!: Date;
  subscription!: Subscription;

  constructor(private data: MyserviceService) {}

  setTask(inputVal: any) {
    inputVal.id === 'des'
      ? (this.taskDesc = inputVal.value)
      : (this.taskName = inputVal.value);
  }

  handleUpdateDays(e: any): void {
    this.daysArray = [];
    for (this.i = 0; this.i < this.days; this.i++) {
      this.daysArray.push((this.i + 1).toString());
    }
  }

  handleCreateTask(): void {
    //localStorage.clear();
    if (!this.taskName || !this.taskDesc)
      return alert('Please, fill out all neccessary fields!');

    this.task = { name: this.taskName, description: this.taskDesc };
    if (!localStorage.getItem('Task List')) {
      return localStorage.setItem('Task List', JSON.stringify([this.task]));
    }

    this.tasks = JSON.parse(localStorage.getItem('Task List')!);
    this.tasks.push(this.task);
    localStorage.setItem('Task List', JSON.stringify(this.tasks));
  }

  ngOnInit(): void {
    this.subscription = this.data.currentDate.subscribe(
      (date) => (this.date = date)
    );

    this.months.map((month, i) => {
      if (i >= this.date.getMonth()) {
        this.monthsUpdated.push(month);
      }
    });

    this.days = this.monthsUpdated[0].name;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
