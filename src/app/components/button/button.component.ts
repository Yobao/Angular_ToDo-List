import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  buttonActivate!: string;

  @Input() text!: string;
  @Input() value!: string;

  constructor() {}

  ngOnInit(): void {}

  onPriorityClick(e: string) {
    this.buttonActivate = this.buttonActivate === e ? '' : e;
    //this.buttonActivate = e;
    console.log(e, this.buttonActivate);
  }
}
