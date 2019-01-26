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
                this.spinner = false;
                alert('s');
            }, error => {
                this.spinner = false;
                alert('e');
            });
        // this._router.navigate(['admin']);
    }
}
