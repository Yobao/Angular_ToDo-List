import { Component, OnInit, OnDestroy } from '@angular/core';
import { Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { MyserviceService } from 'src/app/services/myservice.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { TABLE_COLUMNS, PRIO_BUTTONS } from 'src/app/pages/create-task/DATA';
import { Task } from 'src/app/pages/create-task/interface';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit, OnDestroy {
  @Input() taskArray!: any;
  @Input() headArray!: any;
  @Input() columnsArray!: any;

  date!: Date;
  localStorageTaskList!: any;
  sortBy!: string;
  filterOrder: string = 'a';
  f1!: number;
  f2!: number;

  subscriptionDate!: Subscription;
  subscriptionTaskList!: Subscription;

  isSortAscending: boolean = true;

  constructor(
    private dateData: MyserviceService,
    private storageData: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.subscriptionDate = this.dateData.currentDate.subscribe(
      (date) => (this.date = date)
    );
    this.subscriptionTaskList = this.storageData.currentStorageState.subscribe(
      (storage) => (this.localStorageTaskList = storage)
    );
    this.customSort(this.taskArray, 'date');
  }

  ngOnDestroy(): void {
    this.subscriptionDate.unsubscribe();
    this.subscriptionTaskList.unsubscribe();
  }

  private customSort = (arr: any, sortBy: string) => {
    return arr.sort((a: any, b: any) =>
      this.isSortAscending
        ? a[sortBy] > b[sortBy]
          ? 1
          : -1
        : a[sortBy] > b[sortBy]
        ? -1
        : 1
    );
  };

  sortTable(e: Event) {
    const colIndexNum: number = parseInt((e.target as HTMLElement).id);
    //Do not sort "Select" & "Desscription" columns condition.
    if ([0, 4].includes(colIndexNum)) return;

    this.isSortAscending =
      (!this.sortBy && TABLE_COLUMNS[colIndexNum] === 'date') ||
      (this.sortBy === TABLE_COLUMNS[colIndexNum] && this.isSortAscending)
        ? false
        : true;

    this.sortBy = TABLE_COLUMNS[colIndexNum];
    this.taskArray =
      this.sortBy === 'priority'
        ? this.customSort(this.taskArray, 'priorityNumber')
        : this.customSort(this.taskArray, this.sortBy);
  }

  handleSelect(e: Event) {
    const target = e.target as HTMLInputElement;
    const checked = target.checked;
    const taskNumber = target.name;
    console.log(checked, taskNumber);
  }

  storageTesting() {
    console.log(typeof this.localStorageTaskList);
  }

  drop(e: any) {}
}
