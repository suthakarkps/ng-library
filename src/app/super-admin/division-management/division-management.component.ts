import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-division-management',
  templateUrl: './division-management.component.html',
  styleUrls: ['./division-management.component.css']

})

export class DivisionManagementComponent implements OnInit {

  displayaddDialog: boolean;
  displayaddslnogenerationDialog: boolean;
  displaydeactivatedialog: boolean;
  displaystandbydialogue: boolean;
  car = {};
  selectedCar;
  newCar: boolean;
  cols: any[];
  colls: any[];
  cars;
  editpopup: boolean

  ngOnInit() {


    this.cols = [
      { field: 'divisionname', header: 'Division Name' },
      { field: 'aliasname', header: 'Alias Name' },
      { field: 'city', header: 'City' }
    ];
    this.colls = [
      { field: 'divisionname', header: 'Division Name' },
      { field: 'aliasname', header: 'Alias Name' }
    ];
    this.cars = [
      { "divisionname": "MedoPharm-Cardiac ", "aliasname": " Cardiac  ", "city": " Chennai  ", },
      { "divisionname": "Medo Pharma- Radiant ", "aliasname": " Radiant  ", "city": "Kodambakkam", },
      { "divisionname": "Medopharm - Jubilant", "aliasname": " MJubli  ", "city": "Chennai", },
      { "divisionname": "Medopharm - Orient", "aliasname": "MORIE", "city": "Chennai", },
      { "divisionname": "Medo Pharma- Vibrant (OTC)division", "aliasname": " (OTC)div ", "city": "Chennai", },

    ]
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
    let cars = [...this.cars];
    if (this.newCar)
      cars.push(this.car);
    else
      cars[this.cars.indexOf(this.selectedCar)] = this.car;

    this.cars = cars;
    this.car = null;
    this.displayaddDialog = false;
  }

  generate() {
    let cars = [...this.cars];
    if (this.newCar)
      cars.push(this.car);
    else
      cars[this.cars.indexOf(this.selectedCar)] = this.car;

    this.cars = cars;
    this.car = null;
    this.displayaddslnogenerationDialog = false;
  }

  delete() {
    let index = this.cars.indexOf(this.selectedCar);
    this.cars = this.cars.filter((val, i) => i != index);
    this.car = null;
    this.displaydeactivatedialog = false;
  }

  cancel() {
    let index = this.cars.indexOf(this.selectedCar);
    this.cars = this.cars
    this.car = null;
    this.displayaddDialog = false;
    this.displaystandbydialogue = false;
    this.displaydeactivatedialog = false;
  }

  clear() {
    let index = this.cars.indexOf(this.selectedCar);
    this.cars = this.cars
    this.car = null;
    this.displayaddslnogenerationDialog = false;
  }

  deactivate() {
    let index = this.cars.indexOf(this.selectedCar);
    this.cars = this.cars.filter((val, i) => i != index);
    this.car = null;
    this.displaydeactivatedialog = false;
  }

  standby() {
    let index = this.cars.indexOf(this.selectedCar);
    this.cars = this.cars.filter((val, i) => i != index);
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
