import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'ns-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  moduleId: module.id,
})
export class AuthComponent implements OnInit {
    form: FormGroup;
    isEmailValid: Boolean = true;
    isPassowrdValid: Boolean = true;

  constructor(private router: RouterExtensions) { }

  ngOnInit() {
      this.form = new FormGroup({
          email: new FormControl(null, {updateOn: 'blur', validators: [Validators.required, Validators.email]}),
          password: new FormControl(null, {updateOn: 'blur', validators: [Validators.required, Validators.minLength(6)]})
      })

  }

  onSubmit(){
    this.router.navigate(["/challenges"], {clearHistory: true})
  }
}
