import { Component, Input } from "@angular/core";


@Component({
    selector: "ns-current-challenge",
    moduleId: module.id,
    templateUrl: "./current-challenge.component.html",
    styleUrls: ["./current-challenge.component.css"]
})
export class CurrentChallengeComponent{
    @Input() currentChallenges:string[] =[]    
}