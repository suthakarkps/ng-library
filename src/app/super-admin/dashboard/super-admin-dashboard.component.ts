import { Component } from '@angular/core';
import { Console } from '@angular/core/src/console';

@Component({
    selector: 'app-super-admin-dashboard',
    templateUrl: './super-admin-dashboard.component.html'
})

export class SuperAdminDashboardComponent {
  data: any;
  datum: any;
  output = {};

  SampleData = {
  
  "squadName": "Super hero squad",
    "homeTown": "Metro City",
      "formed": 2016,
        "secretBase": "Super tower",
          "active": true,
            "members": [
              {
                "name": "Molecule Man",
                "age": 29,
                "secretIdentity": "Dan Jukes",
                "powers": [
                  "Immortality",
                  "Turning tiny",
                  "Radiation blast"
                ]
              },
              {
                "name": "Madame Uppercut",
                "age": 39,
                "secretIdentity": "Jane Wilson",
                "powers": [
                  "Million tonne punch",
                  "Damage resistance",
                  "Superhuman reflexes"
                ]
              },
              {
                "name": "Eternal Flame",
                "age": 1000000,
                "secretIdentity": "Unknown",
                "powers": [
                  "Immortality",
                  "Immortality",
                  "Inferno",
                  "Teleportation",
                  "Interdimensional travel"
                ]
              }
            ]
};
  GetJsonData() {
    console.log(this.SampleData["members"]);

    for (let i = 0; i < this.SampleData["members"].length; i++)
    {
      for (let j = 0; j < this.SampleData["members"][i].powers.length; j++)
      {
        if (this.SampleData["members"][i].powers[j] == "Immortality")
        {

          console.log(this.SampleData.members[i]);
        }
      }
    }
  }
  constructor() {
        this.options = {
            chart: {
                type: 'solidgauge'
            },
            title: null,
            pane: {
                center: ['50%', '85%'],
                size: '120%',
                startAngle: -90,
                endAngle: 90,
                background: {
                    innerRadius: '60%',
                    outerRadius: '100%',
                    shape: 'arc'
                }
            },
            tooltip: {
                enabled: false
            },
            // the value axis
            yAxis: {
                stops: [
                    [0.1, '#0193de'], // green
                    [0.5, '#0193de'], // yellow
                    [0.9, '#0193de'] // red
                ],
                lineWidth: 0,
                minorTickInterval: null,
                tickAmount: 2,
                title: {
                    y: -70
                },
                labels: {
                    y: 16
                },
                min: 0,
                max: 200,                
            },

            plotOptions: {
                solidgauge: {
                    dataLabels: {
                        y: 5,
                        borderWidth: 0,
                        useHTML: true
                    }
                }
            },
            credits: {
                enabled: false
            },

            series: [{
                name: 'Speed',
                data: [80],
                tooltip: {
                    valueSuffix: ' km/h'
                }
            }]

        };
  }
  options: Object;
}
