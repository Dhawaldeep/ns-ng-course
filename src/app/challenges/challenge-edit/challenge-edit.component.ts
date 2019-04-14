import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { RouterExtensions, PageRoute } from 'nativescript-angular/router';

@Component({
  selector: 'ns-challenge-edit',
  templateUrl: './challenge-edit.component.html',
  styleUrls: ['./challenge-edit.component.css'],
  moduleId: module.id,
})
export class ChallengeEditComponent implements OnInit{
  @Output() input = new EventEmitter<string>()
  challengeDescription = "This is a challenge description";

  isCreating: boolean = true;

  constructor(private pageRoute: PageRoute, private router: RouterExtensions){}

  ngOnInit(){
    this.pageRoute.activatedRoute.subscribe(activatedRoute=>{
      activatedRoute.paramMap.subscribe(paramMap=>{
        if(!paramMap.has('mode')){
          this.isCreating = true
        }else{
          console.log(paramMap.get('mode'))
          this.isCreating = paramMap.get('mode') !== 'edit'
        }
      })
    })
  }

  onAddChallenge(){
    this.input.emit(this.challengeDescription)
  }

  onSubmit(title: string, description: string){
    console.log(title,description)
    this.router.backToPreviousPage();
  }
}
