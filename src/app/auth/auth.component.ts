import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {TextField} from 'tns-core-modules/ui/text-field';

@Component({
  selector: 'ns-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  moduleId: module.id,
})
export class AuthComponent implements OnInit {
    form: FormGroup;
    isEmailValid: Boolean = true;
    isPasswordValid: Boolean = true;
    isLogin: boolean = true
    @ViewChild('emailEl') emailEl: ElementRef<TextField>
    @ViewChild('passwordEl') passwordEl: ElementRef<TextField>
  constructor(private router: RouterExtensions) { }

  ngOnInit() {
      this.form = new FormGroup({
          email: new FormControl(null, {updateOn: 'blur', validators: [Validators.required, Validators.email]}),
          password: new FormControl(null, {updateOn: 'blur', validators: [Validators.required, Validators.minLength(6)]})
      })

      this.form.get('email').statusChanges.subscribe(status=>{
        this.isEmailValid = status === 'VALID'
      })

      this.form.get('password').statusChanges.subscribe(status=>{
        this.isPasswordValid = status === 'VALID'
      })

  }

  onSubmit(){
    this.emailEl.nativeElement.focus()
    this.passwordEl.nativeElement.focus()
    this.passwordEl.nativeElement.dismissSoftInput()
    const email = this.form.get('email').value
    const password = this.form.get('password').value
    console.log(email,password)
    if(this.isLogin){
        console.log('Loggin In.....')
    }else{
        console.log('Signin Up....')
    }
    this.form.reset()
    this.isEmailValid = true;
    this.isPasswordValid = true;
    this.router.navigate(["/challenges"], {clearHistory: true})
  }

  onDone(){
    this.emailEl.nativeElement.focus()
    this.passwordEl.nativeElement.focus()
    this.passwordEl.nativeElement.dismissSoftInput()
  }

  onSwitch(){
      this.isLogin = !this.isLogin
  }
}
