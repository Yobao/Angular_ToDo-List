import { Component, OnInit } from '@angular/core';
import { TitleComponent } from '../components/title/title.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
