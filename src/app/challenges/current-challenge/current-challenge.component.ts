import { Component, Input, ViewContainerRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

import {ModalDialogService} from "nativescript-angular/modal-dialog"
import { DayModalComponent } from "../day-modal/day-modal.component";
import { UIService } from "../../shared/ui/ui.service";

@Component({
    selector: "ns-current-challenge",
    moduleId: module.id,
    templateUrl: "./current-challenge.component.html",
    styleUrls: ["./current-challenge.component.css"]
})
export class CurrentChallengeComponent{
    @Input() currentChallenge: string = "The Current Challenge";

    constructor(private router: RouterExtensions, private modalDialog: ModalDialogService, private vcRef: ViewContainerRef, private uIService: UIService){

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