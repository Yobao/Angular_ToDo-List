import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { MyserviceService } from 'src/app/services/myservice.service';
import { TABLE_COLUMNS, PRIO_BUTTONS } from 'src/app/pages/create-task/DATA';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() taskArray!: any;
  @Input() headArray!: any;
  @Input() columnsArray!: any;

  date!: Date;
  filter!: string;
  filterOrder: string = 'a';
  f1!: number;
  f2!: number;

  private orderChange = () => {
    if (this.filterOrder === 'a') {
      this.f1 = 1;
      this.f2 = -1;
    } else {
      this.f1 = -1;
      this.f2 = 1;
    }
  };

  constructor(private dateData: MyserviceService) {}

  ngOnInit(): void {
    this.dateData.currentDate.subscribe((date) => (this.date = date));
    this.taskArray = this.taskArray.sort((a: any, b: any) =>
      a.date > b.date ? 1 : -1
    );
  }

  sortTable(e: Event) {
    const eventTarget = e.target as HTMLElement;

    this.filterOrder =
      this.filter === TABLE_COLUMNS[parseInt(eventTarget.id)] &&
      this.filterOrder === 'a'
        ? 'd'
        : 'a';
    this.orderChange();

    this.filter = TABLE_COLUMNS[parseInt(eventTarget.id)];
    this.taskArray =
      this.filter === 'priority'
        ? this.taskArray.sort((a: any, b: any) =>
            a.priorityNumber > b.priorityNumber ? this.f1 : this.f2
          )
        : this.taskArray.sort((a: any, b: any) =>
            a[this.filter] > b[this.filter] ? this.f1 : this.f2
          );
  }
}
