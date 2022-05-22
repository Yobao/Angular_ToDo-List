import { Component, OnInit, Input } from '@angular/core';
import { InputComponent } from 'src/app/components/input/input.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { MONTH_DAY } from './DATA';
import { Test, Month, Date } from './interface';
import { MyserviceService } from 'src/app/services/myservice.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent implements OnInit {
  taskName?: string;
  taskDesc?: string;
  i!: number;
  tasks: any;
  days!: number;
  selectionDay!: number | string;

  public months: Array<Month> = MONTH_DAY;
  task: Test = { name: '', description: '' };
  daysArray: string[] = [];

  setTask(inputVal: any) {
    inputVal.id === 'des'
      ? (this.taskDesc = inputVal.value)
      : (this.taskName = inputVal.value);
  }

  handleUpdateDays(): void {
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

  constructor(private service: MyserviceService) {}

  /*   getString() {
    console.log(this.service.getDate());
  } */

  ngOnInit(): void {
    setInterval(() => {
      this.service.getDate();
    }, 1000);
  }
}
