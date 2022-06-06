import { Component, OnInit, OnDestroy } from '@angular/core';
import { Task } from '../../../data/interface';
import { TABLE_HEAD, TABLE_COLUMNS, MONTH_LIST } from '../../../data/DATA';

import { MyserviceService } from 'src/app/services/myservice.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
})
export class ToDoComponent implements OnInit {
  toDoTasks!: Task[];
  tableHead: string[] = TABLE_HEAD;
  tableColumns: string[] = TABLE_COLUMNS;

  subscriptionLocalStorage!: Subscription;

  constructor(private toDo: LocalStorageService) {}

  ngOnInit(): void {
    this.subscriptionLocalStorage = this.toDo.currentStorageState.subscribe(
      (store) => (this.toDoTasks = store)
    );
  }

  ngOnDestroy() {
    this.subscriptionLocalStorage.unsubscribe();
  }
}
