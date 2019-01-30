import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-feedback-form-view',
    templateUrl: './feedback-form-view.component.html',
    styleUrls: ['./feedback-form-view.component.css']

})

export class FeedbackFormViewComponent implements OnInit {
  displayCompletedDialog: boolean;
  displayViewDialog: boolean;
  car = {};
  selectedCar;
  newCar: boolean;
  cols: any[];
  cars;
 
  ngOnInit() {


    this.cols = [
      { field: 'divisionname', header: 'Division Name' },

    ];
    this.cars = [
      { "divisionname": " Tablets (India) - Pharma  " },
      { "divisionname": " Medo Pharma- Radiant  " },
      { "divisionname": " RI Pharma  " },
      { "divisionname": "  Zedawn Life Sciences Pvt.ltd  " },
      { "divisionname": " Eldorado Biotech  " }
      
    ]
  }

  showDialogToComplete() {
    this.newCar = true;
    this.car = {};
    this.displayCompletedDialog = true;
  }

  showDialogToView() {
    this.newCar = true;
    this.car = {};
    this.displayViewDialog = true;
  }

  save() {
    let cars = [...this.cars];
    if (this.newCar)
      cars.push(this.car);
    else
      cars[this.cars.indexOf(this.selectedCar)] = this.car;

    this.cars = cars;
    this.car = null;
    this.displayCompletedDialog = false;
  }

  delete() {
    let index = this.cars.indexOf(this.selectedCar);
    this.cars = this.cars
    this.car = null;
    this.displayViewDialog = false;
  }

  cancel() {
    let index = this.cars.indexOf(this.selectedCar);
    this.cars = this.cars
    this.car = null;
    this.displayCompletedDialog = false;
  }

  deactivate() {
    let index = this.cars.indexOf(this.selectedCar);
    this.cars = this.cars.filter((val, i) => i != index);
    this.car = null;
    this.displayViewDialog = false;
  }



  cloneCar(c) {
    let car = {};
    for (let prop in c) {
      car[prop] = c[prop];
    }
    return car;
  }
}
