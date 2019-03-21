import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CurrentChallengeComponent } from "./current-challenge/current-challenge.component";
import { TodayComponent } from "./today/today.component";
import { ChallengeTabsComponent } from "./challenge-tabs/challenge-tabs.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ChallengesRoutingModule } from "./challenges-routing.module";
import { SharedModule } from "../shared/shared.module";
import { NativeScriptCommonModule } from "nativescript-angular/common";



@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        ChallengesRoutingModule,
        SharedModule
    ],
    declarations: [
        CurrentChallengeComponent,
        TodayComponent,
        ChallengeTabsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ChallengesModule{}