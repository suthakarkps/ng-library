import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    private spinner = false;
    private loginForm: FormGroup;

    constructor(
        private _sharedService: SharedService,
        private _formBuilder: FormBuilder,
        private _router: Router
    ) { }

    ngOnInit() {
        localStorage.clear();
        this.loginForm = this._formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    get Form() {
        return this.loginForm.controls;
    }

    onSubmit() {
        this.spinner = true;
        const postData = {
            username: this.loginForm.controls.username.value,
            password: this.loginForm.controls.password.value
        };
        this._sharedService.getToken(this._sharedService.getValue('endpoint') + '/token', postData)
            .subscribe(response => {
                const currentTime = new Date();
                this.loginForm.reset();
                localStorage.setItem('expires_in', JSON.stringify(currentTime.getTime() + response.expires_in * 1000));
                localStorage.setItem('token', response.access_token);
                this._sharedService.broadcastMessage({
                    severity: 'success',
                    summary: 'Login Successful',
                    detail: 'You will be redirect to respective page'
                });
                this.getUserDetails();
            }, error => {
                this.spinner = false;
                this._sharedService.broadcastMessage({
                    severity: 'error',
                    summary: 'Login Failure',
                    detail: 'Invalid Username or Password'
                });
                this.loginForm.reset();
            });

    }

    getUserDetails() {
        this._sharedService.post(this._sharedService.getValue('endpoint') + '/api/GetLoginUser', {})
            .subscribe(response => {
                this.spinner = false;
                localStorage.setItem('username', response.UserName);
                localStorage.setItem('userrole', response.UserRole);
                this._router.navigate([localStorage.getItem('userrole')], { skipLocationChange: true });
                this._sharedService.clearMessage();
                this._sharedService.broadcastMessage({
                    severity: 'success',
                    summary: 'Welcome ' + localStorage.getItem('userrole'),
                    detail: 'You have been logged in successfully'
                });
            }, error => {
                this.spinner = false;
                this._sharedService.broadcastMessage({
                    severity: 'error',
                    summary: 'Login Failure',
                    detail: 'Unable to login'
                });
                this.loginForm.reset();
            });
    }
}
