import { Component, OnInit, Input } from '@angular/core';
import { InputComponent } from 'src/app/components/input/input.component';
import { MONTHS } from './DATAS';
import { Test, Month } from './interface';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent implements OnInit {
  //Months = MONTHS;

  placeHolderTask: string = 'Name of the task';
  placeHolderDesc: string = 'Description - max 300 characters.';

  inputTaskID: string = 'taskName';
  inputDesID: string = 'des';

  titleTask: string = 'Task Name';
  titleDesc: string = 'Description';

  taskName?: string;
  taskDesc?: string;

  tasks: any;
  task: Test = { name: '', description: '' };

  public months: Array<Month> = [
    {
      name: 'Január',
      days: 31,
    },
    {
      name: 'Február',
      days: 28,
    },
    {
      name: 'Marec',
      days: 31,
    },
    {
      name: 'Apríl',
      days: 30,
    },
    {
      name: 'Máj',
      days: 31,
    },
    {
      name: 'Jún',
      days: 30,
    },
    {
      name: 'Júl',
      days: 31,
    },
    {
      name: 'August',
      days: 31,
    },
    {
      name: 'September',
      days: 30,
    },
    {
      name: 'Október',
      days: 31,
    },
    {
      name: 'November',
      days: 30,
    },
    {
      name: 'December',
      days: 31,
    },
  ];
  days!: number;
  i!: number;
  test: string[] = [];

  setTask(inputVal: any) {
    inputVal.id === 'des'
      ? (this.taskDesc = inputVal.value)
      : (this.taskName = inputVal.value);
  }

  handleUpdateDays(): void {
    this.test = [];
    for (this.i = 0; this.i < this.days; this.i++) {
      this.test.push((this.i + 1).toString());
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

  constructor() {}

  ngOnInit(): void {}
}
