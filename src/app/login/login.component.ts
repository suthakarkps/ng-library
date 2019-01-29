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
                console.log(response);
                localStorage.setItem("token", response.access_token)                
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
        // this._router.navigate(['admin']);
    }

    getUserDetails() {
        this._sharedService.get(this._sharedService.getValue('endpoint') + '/api/SuperAdmin/GetLoginUser')
            .subscribe(response => {
                this._sharedService.broadcastMessage({
                    severity: 'success',
                    summary: 'Login Successful',
                    detail: 'You will be redirect to respective page'
                });
                this.loginForm.reset();
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
}
