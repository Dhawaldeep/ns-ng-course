import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ns-challenge-edit',
  templateUrl: './challenge-edit.component.html',
  styleUrls: ['./challenge-edit.component.css'],
  moduleId: module.id,
})
export class ChallengeEditComponent{
  @Output() input = new EventEmitter<string>()
  challengeDescription = "This is a challenge description";

  onAddChallenge(){
    this.input.emit(this.challengeDescription)
  }
}