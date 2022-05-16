import { Component, OnInit, Input } from '@angular/core';
import { InputComponent } from 'src/app/components/input/input.component';
import { Test } from './interface';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent implements OnInit {
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

  setTask(inputVal: any) {
    inputVal.id === 'des'
      ? (this.taskDesc = inputVal.value)
      : (this.taskName = inputVal.value);
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
