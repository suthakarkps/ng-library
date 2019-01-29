import { Component, OnInit } from '@angular/core';
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
    private messageService: MessageService,
    private _sharedService: SharedService) { 
      this._sharedService.observedMessage$.subscribe(msg => {
        this.messageService.add(msg); 
      });
    }

  ngOnInit() {
    this._sharedService.setValue('endpoint', Config.environment['endpoint']);
  }
}
