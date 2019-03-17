import { Component, Input } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";


@Component({
    selector: "ns-current-challenge",
    moduleId: module.id,
    templateUrl: "./current-challenge.component.html",
    styleUrls: ["./current-challenge.component.css"]
})
export class CurrentChallengeComponent{
    @Input() currentChallenge: string = "The Current Challenge";   

    constructor(private router: RouterExtensions){

    }
    onEdit(){
        this.router.navigate(["/challenge-edit"])
    }
}