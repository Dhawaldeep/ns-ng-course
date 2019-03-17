import { Component } from "@angular/core";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent { 
    enteredChallenges: string[] = []

    addChallenge(challenge){
        this.enteredChallenges.push(challenge)
    }
}
