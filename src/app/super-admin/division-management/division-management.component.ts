import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-division-management',
  templateUrl: './division-management.component.html',
  styleUrls: ['./division-management.component.css']

})

export class DivisionManagementComponent implements OnInit {
  spinner = false;
  displayaddDialog: boolean;
  displayaddslnogenerationDialog: boolean;
  displaydeactivatedialog: boolean;
  displaystandbydialogue: boolean;
  car = {};
  selectedCar;
  newCar: boolean;
  cols: any[];
  colls: any[];
  divisions;
  editpopup: boolean

  constructor(private _sharedService: SharedService) { }

  ngOnInit() {
    // this.cols = [
    //   { field: 'divisionname', header: 'Division Name' },
    //   { field: 'aliasname', header: 'Alias Name' },
    //   { field: 'city', header: 'City' }
    // ];
    // this.colls = [
    //   { field: 'divisionname', header: 'Division Name' },
    //   { field: 'aliasname', header: 'Alias Name' }
    // ];
    // this.divisions = [
    //   { "divisionname": "MedoPharm-Cardiac ", "aliasname": " Cardiac  ", "city": " Chennai  ", },
    //   { "divisionname": "Medo Pharma- Radiant ", "aliasname": " Radiant  ", "city": "Kodambakkam", },
    //   { "divisionname": "Medopharm - Jubilant", "aliasname": " MJubli  ", "city": "Chennai", },
    //   { "divisionname": "Medopharm - Orient", "aliasname": "MORIE", "city": "Chennai", },
    //   { "divisionname": "Medo Pharma- Vibrant (OTC)division", "aliasname": " (OTC)div ", "city": "Chennai", }
    // ]

    this.GetDivisionDetails();
  }


  GetDivisionDetails() {
    this.spinner = true;
    this.cols = [
      { field: 'divisionname', header: 'Division Name' },
      { field: 'aliasname', header: 'Alias Name' },
      { field: 'city', header: 'City' }
    ];
    this._sharedService.get(this._sharedService.getValue('endpoint') + '/api/GetDivisionDetails')
      .subscribe(response => {
        this.spinner = false;
        this._sharedService.broadcastMessage({
          severity: 'success',
          summary: 'State Details',
          detail: 'Retrived state details successfully.'
        });
        this.divisions = response;
      }, error => {
        this.spinner = false;
        this._sharedService.broadcastMessage({
          severity: 'error',
          summary: 'State Details',
          detail: 'Unable to retrive state details.'
        });
      });
  }
  showDialogToAdd() {
    this.newCar = true;
    this.car = {};
    this.displayaddDialog = true;
  }

  showDialogToAddSlNoGeneration() {
    this.newCar = true;
    this.car = {};
    this.displayaddslnogenerationDialog = true;
  }
  showDialogToDeactivate() {
    this.newCar = true;
    this.car = {};
    this.displaydeactivatedialog = true;
  }

  showDialogToStandby() {
    this.newCar = true;
    this.car = {};
    this.displaystandbydialogue = true;
  }

  save() {
    let divisions = [...this.divisions];
    if (this.newCar)
      divisions.push(this.car);
    else
      divisions[this.divisions.indexOf(this.selectedCar)] = this.car;

    this.divisions = divisions;
    this.car = null;
    this.displayaddDialog = false;
  }

  generate() {
    let divisions = [...this.divisions];
    if (this.newCar)
      divisions.push(this.car);
    else
      divisions[this.divisions.indexOf(this.selectedCar)] = this.car;

    this.divisions = divisions;
    this.car = null;
    this.displayaddslnogenerationDialog = false;
  }

  delete() {
    let index = this.divisions.indexOf(this.selectedCar);
    this.divisions = this.divisions.filter((val, i) => i != index);
    this.car = null;
    this.displaydeactivatedialog = false;
  }

  cancel() {
    let index = this.divisions.indexOf(this.selectedCar);
    this.divisions = this.divisions
    this.car = null;
    this.displayaddDialog = false;
    this.displaystandbydialogue = false;
    this.displaydeactivatedialog = false;
  }

  clear() {
    let index = this.divisions.indexOf(this.selectedCar);
    this.divisions = this.divisions
    this.car = null;
    this.displayaddslnogenerationDialog = false;
  }

  deactivate() {
    let index = this.divisions.indexOf(this.selectedCar);
    this.divisions = this.divisions.filter((val, i) => i != index);
    this.car = null;
    this.displaydeactivatedialog = false;
  }

  standby() {
    let index = this.divisions.indexOf(this.selectedCar);
    this.divisions = this.divisions.filter((val, i) => i != index);
    this.car = null;
    this.displaystandbydialogue = false;
  }


  cloneCar(c) {
    let car = {};
    for (let prop in c) {
      car[prop] = c[prop];
    }
    return car;
  }

}
