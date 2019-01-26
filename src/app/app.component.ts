import { Component, OnInit } from '@angular/core';
import * as Config from '../environments/environment';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _sharedService: SharedService) { }

  ngOnInit() {
    this._sharedService.setValue('endpoint', Config.environment['endpoint']);
  }

}
