import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular/modal-dialog';

@Component({
  selector: 'ns-day-modal',
  templateUrl: './day-modal.component.html',
  styleUrls: ['./day-modal.component.css'],
  moduleId: module.id,
})
export class DayModalComponent implements OnInit {
  loadedDate: Date
  constructor(private modalDialogParams: ModalDialogParams) { }

  ngOnInit() {
    this.loadedDate = (this.modalDialogParams.context as {date: Date}).date
  }

  onHandleInput(action: string){
    this.modalDialogParams.closeCallback(action)
  }

}
