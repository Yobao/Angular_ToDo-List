import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'header-button',
  templateUrl: './header-button.component.html',
  styleUrls: ['./header-button.component.css'],
})
export class HeaderButtonComponent implements OnInit {
  constructor() {}

  @Input() text?: string;

  ngOnInit(): void {}
}
