import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'ns-challenge-actions',
  templateUrl: './challenge-actions.component.html',
  styleUrls: ['./challenge-actions.component.scss'],
  moduleId: module.id,
})
export class ChallengeActionsComponent implements OnInit {
  @Output() actionSelect = new EventEmitter<'complete' | 'fail' | 'Cancel'>();
  @Input() cancelText = 'Cancel';

  constructor() { }

  ngOnInit() {
  }

  onAction(action: 'complete' | 'fail' | 'Cancel'){
    this.actionSelect.emit(action);
  }
}
