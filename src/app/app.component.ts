import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/api';

import * as Config from '../environments/environment';
import { SharedService } from './shared/shared.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private _router: Router,
    private messageService: MessageService,
    private _sharedService: SharedService) {
    this._sharedService.observedMessage$.subscribe(msg => {
      this.messageService.add(msg);
    });
  }

  ngOnInit() {
    this._sharedService.setValue('endpoint', Config.environment['endpoint']);
    // this._sharedService.setValue('local', Config.environment['local']);

    const currentTime = new Date();
    if (localStorage.getItem('userrole') && JSON.parse(localStorage.getItem('expires_in')) > currentTime.getTime()) {
      this._router.navigate([localStorage.getItem('userrole')], { skipLocationChange: true });
    } else {
      this._router.navigate(['./login'], { skipLocationChange: true });
    }
  }
}
