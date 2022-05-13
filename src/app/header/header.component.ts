import { Component, OnInit } from '@angular/core';
import { TitleComponent } from '../components/title/title.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  headerTitle: string = 'ToDo List';

  constructor() {}

  ngOnInit(): void {}
}
