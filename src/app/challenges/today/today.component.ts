import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChallengService } from '../challenge.service';
import { Day } from '../day.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ns-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss'],
  moduleId: module.id,
})
export class TodayComponent implements OnInit,OnDestroy {
	currentDay: Day
	private currentChallengeSub: Subscription
    constructor(private challengeService: ChallengService) { }


    ngOnInit() {
		this.currentChallengeSub=this.challengeService.currentChallenge.subscribe(challenge=>{
            if(challenge) this.currentDay = challenge.currentDay
		})
	}

	ngOnDestroy(){
		if(this.currentChallengeSub){
			this.currentChallengeSub.unsubscribe()
		}
	}

  onHandleInput(action: string){
    console.log(action)
  }
}
