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
    this.tasks = JSON.parse(localStorage.getItem('Task List')!);
  }

  addTask(taskToAdd: Task) {
    if (!localStorage.getItem('Task List')) {
      return localStorage.setItem('Task List', JSON.stringify([taskToAdd]));
    }
    this.getTasks();
    this.tasks.push(taskToAdd);
    this.updateTasks(this.tasks);
  }

  deleteTask(taskToDelete: {}) {}

  updateTasks(data: Task[]) {
    localStorage.setItem('Task List', JSON.stringify(data));
    this.localStorageTasks.next(data);
  }

  clearUnderline() {
    this.getTasks();
    for (let i: number = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].isActive === true) this.tasks[i].isActive = false;
    }
    this.updateTasks(this.tasks);
  }
}
