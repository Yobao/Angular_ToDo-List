import { Component, OnInit, Type } from '@angular/core';
import { TableRowComponent } from 'src/app/components/table/table-row/table-row.component';
import { TableCellComponent } from 'src/app/components/table/table-cell/table-cell.component';
import { Task } from '../create-task/interface';
import { TABLE_HEAD, TABLE_COLUMNS } from '../create-task/DATA';
import { Testing } from '../create-task/interface';

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

  test() {
    for (let i: number = 0; i < this.toDoTasks.length; i++) {}
  }
}
