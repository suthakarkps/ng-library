import { Component } from '@angular/core';

@Component({
    selector: 'app-admin-dashboard',
    templateUrl: './admin-dashboard.component.html'
})

export class AdminDashboardComponent {

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
                    [0.1, '#b51b3d'], // green
                    [0.5, '#b51b3d'], // yellow
                    [0.9, '#b51b3d'] // red
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
