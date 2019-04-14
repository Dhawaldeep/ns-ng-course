import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { isAndroid } from 'tns-core-modules/platform';
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from 'nativescript-angular/router';
import { UIService } from '../ui.service';

declare var android: any;

@Component({
  selector: 'ns-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css'],
  moduleId: module.id,
})
export class ActionBarComponent implements OnInit, AfterViewInit {
  @Input() title: string;
  @Input() showBackButton: boolean = true
  @Input() hasMenu: boolean = true

  constructor(private page: Page, private router: RouterExtensions, private uiService: UIService) { }

  ngOnInit() {
    console.log(this.title)
  }

  ngAfterViewInit(){
    console.log(this.title)
  }

  get canGoBack() {
    return this.router.canGoBack() && this.showBackButton;
  }

  get android(){
    return isAndroid
  }

  onLoadedActionBar(){
    if(isAndroid){
        const androidToolBar = this.page.actionBar.nativeView;
        const backButton = androidToolBar.getNavigationIcon();
        let color = '#171717';
        if(this.hasMenu){
            color = "#ffffff"
        }
        if(backButton){
            backButton.setColorFilter(android.graphics.Color.parseColor(color),(<any>android.graphics).PorterDuff.Mode.SRC_ATOP)
        }
    }
  }

  onBack(){
    this.router.backToPreviousPage()
  }

  onToggleMenu(){
    this.uiService.toggleDrawer();
  }

}
