import { Component } from "@angular/core";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent { 
    enteredChallenge: string

    addChallenge(challenge: string){
        this.enteredChallenge = challenge;
    }
}
