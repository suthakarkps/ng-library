import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-state-location-management',
  templateUrl: './state-location-management.component.html',
  styleUrls: ['./state-location-management.component.css']

})

export class StateLocationManagementComponent implements OnInit {
  private spinner = false;
  addOrEditDialog: boolean;
  addOrEditDialogTitle;
  private stateForm: FormGroup;
  deactivationDialog: boolean;
  cols: any[];
  states;

  constructor(
    private _sharedService: SharedService,
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    // this.cols = [
    //   { field: 'shortname', header: 'Short Name' },
    //   { field: 'statename', header: 'State Name' },
    //   { field: 'divisionaliasname', header: 'Division Alias Name' },
    // ];

    // this.states = [
    //   { "StateID": 1, "StateName": "TamilNadu", "StateShortName": "TN", "WeekOff": 0, "StateDeactiveDate": "0001-01-01T00:00:00", "StateReactiveDate": "0001-01-01T00:00:00", "IsActive": true },
    //   { "StateID": 2, "StateName": "Bihar", "StateShortName": "BH", "WeekOff": 0, "StateDeactiveDate": "0001-01-01T00:00:00", "StateReactiveDate": "0001-01-01T00:00:00", "IsActive": true },
    //   { "StateID": 3, "StateName": "Kerala", "StateShortName": "KA", "WeekOff": 0, "StateDeactiveDate": "0001-01-01T00:00:00", "StateReactiveDate": "0001-01-01T00:00:00", "IsActive": true },
    //   { "StateID": 4, "StateName": "Karnataka", "StateShortName": "KA", "WeekOff": 0, "StateDeactiveDate": "0001-01-01T00:00:00", "StateReactiveDate": "0001-01-01T00:00:00", "IsActive": true },
    //   { "StateID": 5, "StateName": "Haryana", "StateShortName": "HA", "WeekOff": 0, "StateDeactiveDate": "0001-01-01T00:00:00", "StateReactiveDate": "0001-01-01T00:00:00", "IsActive": true },
    //   { "StateID": 6, "StateName": "Gujarat", "StateShortName": "GT", "WeekOff": 0, "StateDeactiveDate": "0001-01-01T00:00:00", "StateReactiveDate": "0001-01-01T00:00:00", "IsActive": true }
    // ]

    this.GetStateDetails();
    this.initStateForm({});
  }

  initStateForm(state) {
    this.stateForm = this._formBuilder.group({
      shortname: [state ? state['StateShortName'] : '', Validators.required],
      statename: [state ? state['StateName'] : '', Validators.required],
      stateid: [state ? state['StateID'] : '']
    });
  }

  get Form() {
    return this.stateForm.controls;
  }

  GetStateDetails() {
    this.spinner = true;
    this.cols = [
      { field: 'StateShortName', header: 'Short Name' },
      { field: 'StateName', header: 'State Name' },
      { field: 'divisionaliasname', header: 'Divisions Name' },
    ];
    this._sharedService.get(this._sharedService.getValue('endpoint') + '/api/GetStateDetails')
      .subscribe(response => {
        this.spinner = false;
        this._sharedService.broadcastMessage({
          severity: 'success',
          summary: 'State Details',
          detail: 'Retrived state details successfully.'
        });
        this.states = response;
      }, error => {
        this.spinner = false;
        this._sharedService.broadcastMessage({
          severity: 'error',
          summary: 'State Details',
          detail: 'Unable to retrive state details.'
        });
      });
  }

  showDialogToaddOrEdit(param) {
    if (param === 'Add') {
      this.addOrEditDialogTitle = 'Add';
      this.initStateForm({});
    }
    else {
      this.addOrEditDialogTitle = 'Edit';
      this.initStateForm(param);
    }
    this.addOrEditDialog = true;
  }

  showDialogToDeactivate() {
    this.addOrEditDialog = true;
  }

  save(param) {
    this.spinner = true;
    let methodName: String;
    let postData = {
      StateShortName: this.stateForm.controls.shortname.value,
      StateName: this.stateForm.controls.statename.value,
    }
    if (param === 'Add') {
      methodName = 'addStateDetails';
    }
    else {
      postData['StateID'] = this.stateForm.controls.stateid.value;
      methodName = 'updateStateDetails';
    }
    this._sharedService.post(this._sharedService.getValue('endpoint') + '/api/' + methodName, postData)
      .subscribe(response => {
        this._sharedService.broadcastMessage({
          severity: 'success',
          summary: 'State Details',
          detail: 'State details' + (param === 'Add' ? ' added ' : ' updated ') + 'successfully.'
        });
        this.addOrEditDialog = false;
        this.GetStateDetails();
      }, error => {
        this.addOrEditDialog = false;
        this.spinner = false;
        this._sharedService.broadcastMessage({
          severity: 'error',
          summary: 'State Details',
          detail: 'Unable to' + (param === 'Add' ? ' add ' : ' update ') + ' state details.'
        });
      });
  }

  deactivate() {
    this.deactivationDialog = false;
  }

  cancel() {
    this.addOrEditDialog = false;
    this.deactivationDialog = false;
  }
}