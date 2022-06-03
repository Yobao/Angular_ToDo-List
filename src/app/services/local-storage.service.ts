import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../pages/create-task/interface';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private localStorageTasks = new BehaviorSubject(
    localStorage.getItem('Task List')
  );
  public currentStorageState = this.localStorageTasks.asObservable();

  constructor() {}

  addTask(taskToAdd: {}) {}

  deleteTask(taskToDelete: {}) {}

  reorderTasks() {}
}
