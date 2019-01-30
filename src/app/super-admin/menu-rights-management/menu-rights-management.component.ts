import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/primeng';

@Component({
  selector: 'app-menu-rights-management',
  templateUrl: './menu-rights-management.component.html',
  styleUrls:  ['./menu-rights-management.component.css']
})

export class MenuRightsManagementComponent implements OnInit {

  displayDialog: boolean;
  displayDialogue: boolean;
  car = {};
  selectedCar;
  newCar: boolean;
  cols: any[];
  cars;
  editpopup: boolean
  filesTree4: TreeNode[];


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
    
    ]


    this.filesTree4 = [
      {
        label: 'Master', children: [{
          label: 'Division', children: [{ label: 'Designation' },{ label: 'Holiday Master' },]},
{ label: 'State/Location' },
                                   { label: 'Designation' },       { label: 'Holiday Master' },
                                   { label: 'Change Password' },   { label: 'Ho Id Creation' },
                                   { label: 'Statwise Holiday' },  { label: 'Menu Rights'    }, ] },

      {label: 'Reports',children: [ { label: 'User List', },              { label: 'Doctor Details'     },
                                    { label: 'FieldForce Status' },       { label: 'Call Average View'  },
                                    { label: 'Work type View Status' },   { label: 'DCR Count View'     }, ] },

      {
        label: 'Options', children: [{ label: 'Mail Box', },              { label: 'Status View', },
                                     { label: 'Not Submitted Status', },  { label: 'Dash Board', }, ]},

    ];
   
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
    this.cars = this.cars.filter((val, i) => i != index);
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
