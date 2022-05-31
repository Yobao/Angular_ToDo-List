import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { TABLE_HEAD, TABLE_COLUMNS } from '../../pages/create-task/DATA';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  /*   toDoTasks: Task[] = JSON.parse(localStorage.getItem('Task List')!);
  tableHead: string[] = TABLE_HEAD;
  tableColumns: string[] = TABLE_COLUMNS; */

  @Input() toDoTasks?: Task[];

  constructor() {}

  ngOnInit(): void {}
}
