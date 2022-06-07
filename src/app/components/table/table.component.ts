import { Component, OnInit, OnDestroy } from '@angular/core';
import { Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { MyserviceService } from 'src/app/services/myservice.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { TABLE_COLUMNS, PRIO_BUTTONS } from 'src/data/DATA';
import { Task } from '../../../data/interface';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

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

  sortBy!: string;
  isSortAscending: boolean = true;
  localStorageTaskList!: Task[];

  subscriptionDate!: Subscription;
  subscriptionTaskList!: Subscription;

  previousActive!: number;

  constructor(
    private dateData: MyserviceService,
    private storageData: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.subscriptionDate = this.dateData.currentDate.subscribe(
      (date) => (this.date = date)
    );
    this.subscriptionTaskList = this.storageData.currentStorageState.subscribe(
      (storage) => (this.taskArray = storage)
    );
    this.customSort(this.taskArray, 'date');
  }

  ngOnDestroy(): void {
    this.subscriptionDate.unsubscribe();
    this.subscriptionTaskList.unsubscribe();
  }

  private customSort = (arr: any, sortBy: string) => {
    return arr.sort((a: any, b: any) => {
      if (a[sortBy] === b[sortBy]) {
        return this.isSortAscending
          ? a.priorityNumber > b.priorityNumber
            ? 1
            : -1
          : a.priorityNumber > b.priorityNumber
          ? -1
          : 1;
      }

      return this.isSortAscending
        ? a[sortBy] > b[sortBy]
          ? 1
          : -1
        : a[sortBy] > b[sortBy]
        ? -1
        : 1;
    });
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
  }

  drop(e: any) {
    if (e.previousIndex === e.currentIndex) return;

    if (this.previousActive !== undefined)
      this.taskArray[this.previousActive].isActive = false;
    this.taskArray[e.previousIndex].isActive = true;
    this.taskArray[e.currentIndex].isActive = false;

    this.previousActive = e.currentIndex;
    moveItemInArray(this.taskArray, e.previousIndex, e.currentIndex);
    this.storageData.updateTasks(this.taskArray);
    this.isSortAscending = false;
  }

  handleUnderline(e: Event) {
    const target = e.target as HTMLInputElement;
    if (this.previousActive !== undefined) {
      for (let i: number = 0; i < this.taskArray.length; i++) {
        if (this.taskArray[i].isActive === true)
          this.taskArray[i].isActive = false;
      }
    }

    this.previousActive =
      target.tagName === 'INPUT'
        ? parseInt(target.parentElement!.id)
        : parseInt(target.id);

    this.taskArray[this.previousActive].isActive = true;
    this.storageData.updateTasks(this.taskArray);
  }

  daco() {
    this.storageData.clearUnderline();
  }
}
