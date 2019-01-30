import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ho-id-management',
  templateUrl: './ho-id-management.component.html',
  styleUrls: ['./ho-id-management.component.css']
})

export class HoIdManagementComponent implements OnInit {

  displayDialog: boolean;
  displayDialogue: boolean;
  car = {};
  selectedCar;
  newCar: boolean;
  cols: any[];
  cars;


  ngOnInit() {

    
    this.cols = [
      { field: 'vin', header: 'Name' },
      { field: 'brand', header: 'User Name' },
      { field: 'year', header: 'Password' },
      
    ];
    this.cars = [
      { "vin": "Ravikumar", "brand": "Ravi", "year": 199, "color": "White", "price": 10000 },
      { "vin": "Premkumar", "brand": "Prem", "year": 198, "color": "Green", "price": 25000 },
      { "vin": "Ayyappan", "brand": "Ayyappan", "year": 197, "color": "Silver", "price": 30000 },
      { "vin": "Hafeez", "brand": "Hafeez", "year": 197, "color": "Black", "price": 12000 },
      { "vin": "Ravikumar", "brand": "Ravi", "year": 199, "color": "Red", "price": 15500 },
      { "vin": "Premkumar", "brand": "Prem", "year": 199, "color": "Maroon", "price": 40000 },
      { "vin": "Ayyappan", "brand": "Ayyappan", "year": 196, "color": "Blue", "price": 25000 },
      { "vin": "Hafeez", "brand": "Hafeez", "year": 198, "color": "Maroon", "price": 22000 },
      { "vin": "Ravikumar", "brand": "Ravi", "year": 196, "color": "Black", "price": 19000 },
      { "vin": "Premkumar", "brand": "Prem", "year": 198, "color": "Brown", "price": 36000 },
      { "vin": "1083ee40", "brand": "VW", "year": 1984, "color": "Silver", "price": 215000 },
      { "vin": "6e0da3ab", "brand": "Volvo", "year": 1987, "color": "Silver", "price": 32000 },
      { "vin": "Ravikumar", "brand": "Jaguar", "year": 1995, "color": "Maroon", "price": 20000 },
      { "vin": "Premkumar", "brand": "Jaguar", "year": 1984, "color": "Orange", "price": 14000 },
      { "vin": "88ec9f66", "brand": "Honda", "year": 1989, "color": "Maroon", "price": 36000 },
      { "vin": "f5a4a5f5", "brand": "BMW", "year": 1986, "color": "Blue", "price": 28000 },
      { "vin": "Ravikumar", "brand": "Mercedes", "year": 1986, "color": "Orange", "price": 14000 },
      { "vin": "Premkumar", "brand": "Mercedes", "year": 1991, "color": "White", "price": 25000 },
      { "vin": "cec593d7", "brand": "VW", "year": 1992, "color": "Blue", "price": 36000 },
      { "vin": "d5bac4f0", "brand": "Renault", "year": 2001, "color": "Blue", "price": 25000 },
      { "vin": "Ravikumar", "brand": "Jaguar", "year": 1990, "color": "Yellow", "price": 52000 },
      { "vin": "Premkumar", "brand": "Audi", "year": 1966, "color": "Maroon", "price": 45000 },
      { "vin": "fc074185", "brand": "BMW", "year": 1962, "color": "Blue", "price": 54000 },
      { "vin": "606ba663", "brand": "Honda", "year": 1982, "color": "Blue", "price": 22000 },
      { "vin": "Ravikumar", "brand": "Mercedes", "year": 2003, "color": "Silver", "price": 15000 },
      { "vin": "Premkumar", "brand": "Mercedes", "year": 1986, "color": "White", "price": 18000 },
      { "vin": "c29da0d7", "brand": "BMW", "year": 1983, "color": "Brown", "price": 32000 },
      { "vin": "24622f70", "brand": "VW", "year": 1973, "color": "Maroon", "price": 36000 },
      { "vin": "Ravikumar", "brand": "Mercedes", "year": 1991, "color": "Red", "price": 21000 },
      { "vin": "Premkumar", "brand": "Jaguar", "year": 1993, "color": "Yellow", "price": 16000 },
      { "vin": "ead9bf1d", "brand": "Fiat", "year": 1968, "color": "Maroon", "price": 43000 },
      { "vin": "bc58113e", "brand": "Renault", "year": 1981, "color": "Silver", "price": 36000 },
      { "vin": "Ravikumar", "brand": "Honda", "year": 2006, "color": "Blue", "price": 240000 },
      { "vin": "c243e3a0", "brand": "Fiat", "year": 1990, "color": "Maroon", "price": 15000 },
      { "vin": "e3d3ebf3", "brand": "Audi", "year": 1996, "color": "White", "price": 28000 },
      { "vin": "45337e7a", "brand": "Mercedes", "year": 1982, "color": "Blue", "price": 14000 },
      { "vin": "Ravikumar", "brand": "Fiat", "year": 2000, "color": "Orange", "price": 26000 },
      { "vin": "036bf135", "brand": "Mercedes", "year": 1973, "color": "Black", "price": 22000 },
      { "vin": "ad612e9f", "brand": "Mercedes", "year": 1975, "color": "Red", "price": 45000 },
      { "vin": "97c6e1e9", "brand": "Volvo", "year": 1967, "color": "Green", "price": 42000 },
      { "vin": "Ravikumar", "brand": "Volvo", "year": 1982, "color": "Red", "price": 36000 },
      { "vin": "81f8972a", "brand": "BMW", "year": 2007, "color": "Black", "price": 56000 },
      { "vin": "f8506743", "brand": "Audi", "year": 1975, "color": "Blue", "price": 42000 },
      { "vin": "596859d1", "brand": "Fiat", "year": 2002, "color": "Green", "price": 48000 },
      { "vin": "Ravikumar", "brand": "Volvo", "year": 1972, "color": "Black", "price": 29000 },
      { "vin": "32f41550", "brand": "Mercedes", "year": 1978, "color": "Brown", "price": 17000 },
      { "vin": "c28cd2e4", "brand": "Volvo", "year": 1982, "color": "Silver", "price": 24000 },
      { "vin": "80890dcc", "brand": "Audi", "year": 1962, "color": "White", "price": 36000 },
      { "vin": "Ravikumar", "brand": "VW", "year": 2000, "color": "Silver", "price": 24000 },
      { "vin": "45ca4786", "brand": "BMW", "year": 1995, "color": "Maroon", "price": 50000 }
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
