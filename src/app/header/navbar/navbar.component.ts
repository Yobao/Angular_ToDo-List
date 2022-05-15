import { Component, OnInit } from '@angular/core';
import { TitleComponent } from 'src/app/components/title/title.component';
import { HeaderButtonComponent } from 'src/app/components/header-button/header-button.component';

@Component({
  selector: 'header-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  headerTitle: string = 'ToDo List';
  createTask: string = 'Create task';
  toDo: string = 'To Do';
  done: string = 'Done';

  visitGit() {
    window.open('https://github.com/Yobao');
  }

  constructor() {}

  ngOnInit(): void {}
}
