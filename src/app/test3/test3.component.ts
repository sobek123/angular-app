import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {
  @Input() text: string = ''
  sr: number = Date.now()
  constructor() { }

  ngOnInit(): void {
  }

}
