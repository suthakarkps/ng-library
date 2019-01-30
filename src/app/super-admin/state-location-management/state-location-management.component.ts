import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-state-location-management',
    templateUrl: './state-location-management.component.html',
    styleUrls: ['./state-location-management.component.css']

})

export class StateLocationManagementComponent implements OnInit {
  displayDialog: boolean;
  displayDialogue: boolean;
  car = {};
  selectedCar;
  newCar: boolean;
  cols: any[];
  cars;


  ngOnInit() {


    this.cols = [
      { field: 'shortname', header: 'Short Name' },
      { field: 'statename',  header: 'State Name' },
      { field: 'divisionaliasname', header:'Division Alias Name' },

    ];
    this.cars = [
      { "shortname": "AR", "statename": "ArunachalaPradesh ", "divisionaliasname": "VR, Themis, SG, Eutheon, Vericare, Hospin, Dermacar, Nimble, AlbDa " },
      { "shortname": "AP", "statename": " AndraPradesh  ", "divisionaliasname": "Demo, MJubli, MORIE, AlbDav, Zedawn, VR, Themis, SG, Eutheon, Cardiac, Vericare, Hospin, Dermacar, Vdemo, Redmed, Radiant, Mendine, Nimble, AlbDa "},
      { "shortname": "AS", "statename": "  Assam   ", "divisionaliasname": "Demo, MJubli, AlbDav, Zedawn, VR, Themis, SG, Eutheon, Vericare, Hospin, Dermacar, Mendine, AlbDa   ",  },
      { "shortname": "BR", "statename": "Bihar", "divisionaliasname": " Demo, AlbDav, VR, Themis, SG, Eutheon, Vericare, Hospin, Dermacar, Mendine, Nimble, AlbDa  ", },
      { "shortname": "CG", "statename": "Chattisgarh", "divisionaliasname": " Demo, AlbDav, VR, Themis, SG, Eutheon, Vericare, Hospin, Dermacar, Eldo, Radiant, AlbDa  "}
     
    ]
  }

  showDialogToAdd() {
    this.newCar = true;
    this.car = {};
    this.displayDialog = true;
  }

  showDialogToDeactivate() {
    this.newCar = true;
    this.car = {};
    this.displayDialogue = true;
  }

  save() {
    let cars = [...this.cars];
    if (this.newCar)
      cars.push(this.car);
    else
      cars[this.cars.indexOf(this.selectedCar)] = this.car;

    this.cars = cars;
    this.car = null;
    this.displayDialog = false;
  }

  delete() {
    let index = this.cars.indexOf(this.selectedCar);
    this.cars = this.cars
    this.car = null;
    this.displayDialog = false;
  }

  cancel() {
    let index = this.cars.indexOf(this.selectedCar);
    this.cars = this.cars
    this.car = null;
    this.displayDialogue = false;
  }

  deactivate() {
    let index = this.cars.indexOf(this.selectedCar);
    this.cars = this.cars.filter((val, i) => i != index);
    this.car = null;
    this.displayDialogue = false;
  }



  cloneCar(c) {
    let car = {};
    for (let prop in c) {
      car[prop] = c[prop];
    }
    return car;
  }
}
