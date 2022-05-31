import { Component, OnInit, Type } from '@angular/core';
import { Task } from '../create-task/interface';
import { TABLE_HEAD, TABLE_COLUMNS } from '../create-task/DATA';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
})
export class ToDoComponent implements OnInit {
  toDoTasks: Task[] = JSON.parse(localStorage.getItem('Task List')!);
  tableHead: string[] = TABLE_HEAD;
  tableColumns: string[] = TABLE_COLUMNS;

  constructor() {}

  ngOnInit(): void {}

  test() {}
}
