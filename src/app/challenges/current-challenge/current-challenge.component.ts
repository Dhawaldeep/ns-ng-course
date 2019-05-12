import { Component, Input, ViewContainerRef, OnInit, OnDestroy } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

import {ModalDialogService} from "nativescript-angular/modal-dialog"
import { DayModalComponent } from "../day-modal/day-modal.component";
import { UIService } from "../../shared/ui/ui.service";
import { ChallengService } from "../challenge.service";
import { Challenge } from "../challenge.model";
import { Subscription } from "rxjs";

@Component({
    selector: "ns-current-challenge",
    moduleId: module.id,
    templateUrl: "./current-challenge.component.html",
    styleUrls: ["./_current-challenge.common.scss"]
})
export class CurrentChallengeComponent implements OnInit, OnDestroy{
    @Input() currentChallenge: string = "The Current Challenge";
    weekDays= ['S','M','T','W','T','F','S'];
    days: {date: number, dayInWeek: number}[] = [];
    currentChallengeData: Challenge
    curChallengeSub: Subscription
    todayDate = new Date().getDate()

    constructor(private router: RouterExtensions, private modalDialog: ModalDialogService, private vcRef: ViewContainerRef, private uIService: UIService, private challengeService: ChallengService){
        console.log(this.todayDate);
    }

    ngOnInit(){
        this.curChallengeSub = this.challengeService.currentChallenge.subscribe(challenge=>{
            this.currentChallengeData = challenge
        })
    }

    ngOnDestroy(){
        if(this.curChallengeSub){
            this.curChallengeSub.unsubscribe()
        }
    }

    getRow(index: number, day:{date: number, dayInWeek: number}){
        const startRow = 1;
        const weekRow = Math.floor(index/7);
        const firstWeekDayofMonth = new Date(this.currentChallengeData.year, this.currentChallengeData.month, 1).getDay();
        const irregularRow = day.dayInWeek < firstWeekDayofMonth ? 1 : 0;
        return startRow+weekRow+irregularRow;
    }

    onEdit(){
        this.router.navigate(["/challenges/edit"], {transition: {name: "slideLeft"}})
    }

    onReplace(){
        this.router.navigate(["/challenges/replace"], {transition: {name: "slideLeft"}})
    }

    onChangeStatus(){
        this.modalDialog.showModal(DayModalComponent, {
            fullscreen: true,
            viewContainerRef: this.uIService.getVCRef()?this.uIService.getVCRef(): this.vcRef,
            context: { date: new Date()}
        }).then(action=>{
            console.log(action)
        })
    }
}
