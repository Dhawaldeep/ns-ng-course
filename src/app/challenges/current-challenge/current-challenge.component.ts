import { Component, Input, ViewContainerRef, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

import {ModalDialogService} from "nativescript-angular/modal-dialog"
import { DayModalComponent } from "../day-modal/day-modal.component";
import { UIService } from "../../shared/ui/ui.service";

@Component({
    selector: "ns-current-challenge",
    moduleId: module.id,
    templateUrl: "./current-challenge.component.html",
    styleUrls: ["./_current-challenge.common.scss"]
})
export class CurrentChallengeComponent implements OnInit{
    @Input() currentChallenge: string = "The Current Challenge";
    weekDays= ['S','M','T','W','T','F','S'];
    days: {date: number, dayInWeek: number}[] = [];
    private currentMonth: number;
    private currentYear: number;

    constructor(private router: RouterExtensions, private modalDialog: ModalDialogService, private vcRef: ViewContainerRef, private uIService: UIService){

    }

    ngOnInit(){
        this.currentYear = new Date().getFullYear();
        this.currentMonth = new Date().getMonth();
        const noOfDays = new Date(this.currentYear, this.currentMonth+1, 0).getDate();

        for (let i = 1; i < noOfDays+1; i++) {
            const dayInWeek = new Date(this.currentYear, this.currentMonth, i).getDay();
            this.days.push({date: i, dayInWeek})
        }

        console.log(this.days);
    }

    getRow(index: number, day:{date: number, dayInWeek: number}){
        const startRow = 1;
        const weekRow = Math.floor(index/7);
        const firstWeekDayofMonth = new Date(this.currentYear, this.currentMonth, 1).getDay();
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