import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import $ from 'jquery';
import { HttpService } from 'src/app/shared/core/services/http/http.service';
import { NotifierService } from 'src/app/shared/core/services/notifier/notifier.service';
import { UtilService } from 'src/app/shared/core/services/utils/util.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public us: UtilService,
    private _http: HttpService
  )
     { }
  user = {
    name: 'koto'
  }
  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  login() {
    this._http.get('/auth/me').subscribe(
      (response) => {
        console.log(response,'coucou')
      },
      (e) => console.log('errorr')
    )
    this.router.navigate(['app','v1','dashboard']);
  }
  submitForm() {
    if (this.loginForm.invalid) {
      return;
    }

    // Form is valid, perform login logic here
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    // Rest of the login logic
  }

}
