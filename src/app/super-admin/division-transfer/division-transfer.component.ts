import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-division-transfer',
    templateUrl: './division-transfer.component.html',
    styleUrls: ['./division-transfer.component.css']

})

export class DivisionTransferComponent implements OnInit {
  
  cities1: any[];
  cities2: any[];
  cities3: any[];
  cities4: any[];
  ngOnInit() {
 
    this.cities1 = [
      { label: '---Select---', value: { id: 1, name: 'Select', code: 'SL' } },
      { label: 'Demo- Pharma Division', value: { id: 2, name: 'Demo- Pharma Division', code: 'DPD' } },
      { label: 'Medopharm Jubliant', value: { id: 3, name: 'Medopharm Jubliant', code: 'MJ' } },
      { label: 'Medopharm Orient', value: { id: 4, name: 'Medopharm Orient', code: 'MO' } },
      { label: 'Albert David Ltd', value: { id: 5, name: 'Albert David Ltd', code: 'ADL' } },
      { label: 'Guys pharmaceutical', value: { id: 6, name: 'Guys pharmaceutical', code: 'GP' } },
      { label: 'Tablets India- pharma', value: { id: 7, name: 'Tablets India- pharma', code: 'TIP' } },
      { label: 'Mendine Pharmaceutical Pt Limited ', value: { id: 8, name: ' Mendine Pharmaceutical', code: 'MP' } },
      { label: 'Zewanlife Sciences', value: { id: 9, name: 'Zewanlife Sciences', code: 'ZS' } },
      { label: 'Lavue Pharmaceuticals ', value: { id: 10, name: 'Lavue Pharmaceuticals', code: 'LP' } }
    ];

    this.cities2 = [
      { label: '---Select---', value: { id: 1, name: 'Select', code: 'SL' } },
      { label: 'Demo- Pharma Division', value: { id: 2, name: 'Demo- Pharma Division', code: 'DPD' } },
      { label: 'Medopharm Jubliant', value: { id: 3, name: 'Medopharm Jubliant', code: 'MJ' } },
      { label: 'Medopharm Orient', value: { id: 4, name: 'Medopharm Orient', code: 'MO' } },
      { label: 'Albert David Ltd', value: { id: 5, name: 'Albert David Ltd', code: 'ADL' } },
      { label: 'Guys pharmaceutical', value: { id: 6, name: 'Guys pharmaceutical', code: 'GP' } },
      { label: 'Tablets India- pharma', value: { id: 7, name: 'Tablets India- pharma', code: 'TIP' } },
      { label: 'Mendine Pharmaceutical Pt Limited ', value: { id: 8, name: ' Mendine Pharmaceutical', code: 'MP' } },
      { label: 'Zewanlife Sciences', value: { id: 9, name: 'Zewanlife Sciences', code: 'ZS' } },
      { label: 'Lavue Pharmaceuticals ', value: { id: 10, name: 'Lavue Pharmaceuticals', code: 'LP' } }
    ];


    this.cities3 = [
      { label: 'Palashmanna ASM Kolkata', value: { id: 1, name: 'Palashmanna ASM Kolkata', code: 'PAK' } },
      { label: 'Aninda Basu DH Kolkata', value: { id: 2, name: 'Aninda Basu DH Kolkata', code: 'ABDK' } },
      { label: 'Arkind Banerjee DSRM Kolkata', value: { id: 3, name: 'Arkind Banerjee DSRM Kolkata', code: 'ADK' } },
      { label: 'Rajib Ghosh DRSE NEW ALIPORE', value: { id: 4, name: 'Rajib Ghosh DRSE NEW ALIPORE', code: 'RGDNA' } },
      { label: 'Prakash DasNEW ALIPORE', value: { id: 5, name: 'Prakash DasNEW ALIPORE', code: 'PDA' } },
      { label: 'Bubai Bera DRSE DUMDUM', value: { id: 6, name: 'Bubai Bera DRSE DUMDUM', code: 'BBDD' } },
      { label: 'Tanmoy Chakraborthy SRSE DUM', value: { id: 7, name: 'Tanmoy Chakraborthy SRSE DUMDUM', code: 'RM' } },
      { label: 'Subrata Duta ZSM Ethical', value: { id: 8, name: 'Subrata Duta ZSM Ethical', code: 'SDZE' } },
      { label: 'Sandipan Sengupta RSM Bengal 1', value: { id: 9, name: 'Sandipan Sengupta RSM Bengal 1', code: 'SSRB' } },
      { label: 'Pradeep Jash ASM Kolkata', value: { id: 10, name: 'Pradeep Jash ASM Kolkata', code: 'PJAM' } }
    ];

    this.cities4 = [
      { label: 'Palashmanna ASM Kolkata', value: { id: 1, name: 'Palashmanna ASM Kolkata', code: 'PAK' } },
      { label: 'Aninda Basu DH Kolkata', value: { id: 2, name: 'Aninda Basu DH Kolkata', code: 'ABDK' } },
      { label: 'Arkind Banerjee DSRM Kolkata', value: { id: 3, name: 'Arkind Banerjee DSRM Kolkata', code: 'ADK' } },
      { label: 'Rajib Ghosh DRSE NEW ALIPORE', value: { id: 4, name: 'Rajib Ghosh DRSE NEW ALIPORE', code: 'RGDNA' } },
      { label: 'Prakash DasNEW ALIPORE', value: { id: 5, name: 'Prakash DasNEW ALIPORE', code: 'PDA' } },
      { label: 'Bubai Bera DRSE DUMDUM', value: { id: 6, name: 'Bubai Bera DRSE DUMDUM', code: 'BBDD' } },
      { label: 'Tanmoy Chakraborthy SRSE DUM', value: { id: 7, name: 'Tanmoy Chakraborthy SRSE DUMDUM', code: 'RM' } },
      { label: 'Subrata Duta ZSM Ethical', value: { id: 8, name: 'Subrata Duta ZSM Ethical', code: 'SDZE' } },
      { label: 'Sandipan Sengupta RSM Bengal 1', value: { id: 9, name: 'Sandipan Sengupta RSM Bengal 1', code: 'SSRB' } },
      { label: 'Pradeep Jash ASM Kolkata', value: { id: 10, name: 'Pradeep Jash ASM Kolkata', code: 'PJAM' } }
    ];
  }
}
