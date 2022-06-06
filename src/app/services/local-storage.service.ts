import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../../data/interface';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  tasks!: Task[];

  private localStorageTasks = new BehaviorSubject(
    JSON.parse(localStorage.getItem('Task List')!)
  );
  public currentStorageState = this.localStorageTasks.asObservable();

  constructor() {}

  // ??????? probably redundant...
  getTasks() {
    JSON.parse(localStorage.getItem('Task List')!);
  }

  clearUnderline() {
    this.tasks = JSON.parse(localStorage.getItem('Task List')!);
    for (let i: number = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].isActive === true) this.tasks[i].isActive = false;
    }
    this.localStorageTasks.next(this.tasks);
    localStorage.setItem('Task List', JSON.stringify(this.tasks));
  }

  addTask(taskToAdd: {}) {}

  deleteTask(taskToDelete: {}) {}

  updateTasks(data: Task) {
    localStorage.setItem('Task List', JSON.stringify(data));
    this.localStorageTasks.next(data);
  }
}
