import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'title-h1',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit {
  @Input() titleText?: string;

  constructor() {}

  ngOnInit(): void {}
}
