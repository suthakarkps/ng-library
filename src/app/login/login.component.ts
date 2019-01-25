import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    private spinner = false;
    private loginForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private _router: Router
    ) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        })
    }
    get Form() {
        return this.loginForm.controls;
    }

    onSubmit() {
        //this.spinner = true;
        //this._router.navigate(['admin']);
    }
}
