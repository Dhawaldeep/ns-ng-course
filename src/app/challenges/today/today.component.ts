import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss'],
  moduleId: module.id,
})
export class TodayComponent implements OnInit {

  constructor() { }


  ngOnInit() {
  }
  onHandleInput(action: string){
    console.log(action)
  }
}
