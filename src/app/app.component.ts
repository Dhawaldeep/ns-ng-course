import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit, ChangeDetectorRef, ViewContainerRef } from "@angular/core";
import { UIService } from "./shared/ui/ui.service";
import { Subscription } from "rxjs";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild(RadSideDrawerComponent) drawerComponent: RadSideDrawerComponent
    enteredChallenge: string
    private drawerSub: Subscription;
    private drawer: RadSideDrawer

    constructor(private uiService: UIService, private changeDetector: ChangeDetectorRef, private router: RouterExtensions, private vCRef: ViewContainerRef){}

    ngOnInit(){
        this.drawerSub = this.uiService.drawerState.subscribe(()=>{
            if(this.drawer){
                console.log('Toggle Drawer')
                this.drawer.toggleDrawerState()
            }
        })
        this.uiService.setVCRef(this.vCRef)
    }

    ngAfterViewInit(){
        this.drawer= this.drawerComponent.sideDrawer
        this.changeDetector.detectChanges();
    }
    ngOnDestroy(){
        if(this.drawerSub){
            this.drawerSub.unsubscribe()
        }
    }

    addChallenge(challenge: string){
        this.enteredChallenge = challenge;
    }

    onLogOut(){
        this.uiService.toggleDrawer();
        this.router.navigate(['/'], {clearHistory: true})
    }
}
