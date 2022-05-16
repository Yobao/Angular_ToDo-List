import { Component, OnInit } from '@angular/core';
import { InputComponent } from 'src/app/components/input/input.component';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent implements OnInit {
  placeHolderTask: string = 'Name of the task';
  placeHolderDesc: string = 'Description - max 300 characters.';

  constructor() {}

  ngOnInit(): void {}
}
