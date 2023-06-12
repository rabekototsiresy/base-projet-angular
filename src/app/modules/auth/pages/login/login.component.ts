import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import $ from 'jquery';
import { Translatable } from 'src/app/shared/core/constants/translatable_const';
import { IApiResponse } from 'src/app/shared/core/interfaces/IApiResponse';
import { HttpService } from 'src/app/shared/core/services/http/http.service';
import { NotifierService } from 'src/app/shared/core/services/notifier/notifier.service';
import { UtilService } from 'src/app/shared/core/services/utils/util.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends Translatable implements OnInit {
  loginForm: FormGroup | any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public us: UtilService,
    private _http: HttpService
  ) {
    super();
  }
  user = {
    name: 'koto',
  };
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.loginForm.invalid) {
      return;
    }
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    this._http
      .post( environment.login , { username, password })
      .subscribe(
        ({ data }: IApiResponse) => {
          console.log(data)
          localStorage.setItem('accessToken', data.accessToken);
          localStorage.setItem('refreshToken', data.refreshToken);
          this.router.navigateByUrl('/app/v1/dashboard')
          // Redirect to protected route or perform other actions upon successful login
        },
        (error) => {
          console.log(error);
          // Handle error cases
        }
      );
  }
}
