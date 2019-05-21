import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../../shared/survey.service';
import { Survey } from '../../shared/survey';

import { AuthService } from '../../shared/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 // p: number = 1;
  Survey: Survey[];
  dtOptions = {};
  date = new Date();
  fecha: string;
  data_ = false;

  // public filter_Key: string;
  //filter_key = '';
  surveys = [];
  dataSource: Observable<any>;
  chartdata: boolean = false;
  view: number[] = [400, 300];
  showLegend = false;
  colorScheme = {
    domain: ['#f44336', '#40c4ff', '#ff9800', '#9575cd ', '#ffeb3b', '#795548', '#cddc39', '#81c784', '#607d8b', '#4caf50']
  };
  showLabels = true;
  explodeSlices = false;
  doughnut = false;

  p1 = []; p2 = []; p3 = []; p3b = []; p4 = []; p5 = []; p6 = []; p7 = []; p2a = []; p2b = []; p2c = []; p2d = []; p2e = []; p2f = []; p3a = []; p4a = [];
  p4b = []; p4c = []; p5a = []; p5b = []; p5c = []; p5d = []; p6a = []; p6b = [];
  p1Data = []; p2Data = []; p3Data = []; p3bData = []; p4Data = []; p5Data = []; p6Data = []; p7Data = []; p2aData = []; p2bData = []; p2cData = [];
  p2dData = []; p2eData = []; p2fData = []; p3aData = []; p4aData = []; p4bData = []; p4cData = []; p5aData = []; p5bData = []; p5cData = [];
  p5dData = []; p6aData = []; p6bData = [];

  constructor(
    public surveyApi: SurveyService,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.fecha = this.date.getDate() + '/' + this.date.getMonth() + '/' + this.date.getFullYear();
    /* this.p1 = []; this.p2 = []; this.p3 = []; this.p3b = []; this.p4 = []; this.p5 = []; this.p6 = []; this.p7 = []; this.p2a = []; this.p2b = [];
    this.p2c = []; this.p2d = []; this.p2e = []; this.p2f = []; this.p3a = []; this.p4a = []; this.p4b = []; this.p4c = []; this.p5a = [];
    this.p5b = []; this.p5c = []; this.p5d = []; this.p6a = []; this.p6b = [];

    this.p1Data = []; this.p2Data = []; this.p3Data = []; this.p3bData = []; this.p4Data = []; this.p5Data = []; this.p6Data = [];
    this.p7Data = []; this.p2aData = []; this.p2bData = []; this.p2cData = []; this.p2dData = []; this.p2eData = []; this.p2fData = [];
    this.p3aData = []; this.p4aData = []; this.p4bData = []; this.p4cData = []; this.p5aData = []; this.p5bData = []; this.p5cData = [];
    this.p5dData = []; this.p6aData = []; this.p6bData = []; */
    this.dataSource = this.surveyApi.getAll();
    this.surveyApi.GetSurveysList().snapshotChanges().subscribe(data => {
      this.Survey = [];
      data.forEach(item => {
        let surv = item.payload.toJSON();
        surv['$key'] = item.key;
        this.Survey.push(surv as Survey);
      });
      this.data_ = true;
     // this.Survey.reverse();
    });
    this.dtOptions = {
      dom: 'Bfrtip',
      // Configure the buttons
      buttons: [
        /* {
          extend: 'print',
          title: 'serviceXpress-' + this.fecha,
          text: 'Imprimir tabla'
        }, */
        {
          extend: 'excel',
          title: 'serviceXpress-' + this.fecha,
          text: 'Exportar a Excel'
        }
      ],
      language: {
        paginate: {
            first:    '«',
            previous: '‹',
            next:     '›',
            last:     '»'
        },
        aria: {
            paginate: {
                first:    'Primero',
                previous: 'Anterior',
                next:     'Siguiente',
                last:     'Último'
            }
        },
        info: 'Mostrando _START_ a _END_ de _TOTAL_ entradas',
        search: 'Buscar'
      },
      pageLength: 10
    };
    this.dataSource.forEach(val => {
      this.chartdata = true;
      val.forEach(element => {
      //  this.surveys.push(element);

        if (this.p1[element.group1]) this.p1[element.group1] += 1; else this.p1[element.group1] = 1;
        if (this.p2[element.group2]) this.p2[element.group2] += 1; else this.p2[element.group2] = 1;
        if (this.p3[element.group3]) this.p3[element.group3] += 1; else this.p3[element.group3] = 1;
        if (this.p3b[element.group3b]) this.p3b[element.group3b] += 1; else this.p3b[element.group3b] = 1;
        if (this.p4[element.group4]) this.p4[element.group4] += 1; else this.p4[element.group4] = 1;
        if (this.p5[element.group5]) this.p5[element.group5] += 1; else this.p5[element.group5] = 1;
        if (this.p6[element.group6]) this.p6[element.group6] += 1; else this.p6[element.group6] = 1;
        if (this.p7[element.group7]) this.p7[element.group7] += 1; else this.p7[element.group7] = 1;
        if (element.group8) { if (this.p2a[element.group8]) this.p2a[element.group8] += 1; else this.p2a[element.group8] = 1; }
        if (element.group9) { if (this.p2b[element.group9]) this.p2b[element.group9] += 1; else this.p2b[element.group9] = 1; }
        if (element.group10) { if (this.p2c[element.group10]) this.p2c[element.group10] += 1; else this.p2c[element.group10] = 1; }
        if (element.group11) { if (this.p2d[element.group11]) this.p2d[element.group11] += 1; else this.p2d[element.group11] = 1; }
        if (element.group12) { if (this.p2e[element.group12]) this.p2e[element.group12] += 1; else this.p2e[element.group12] = 1; }
        if (element.group13) { if (this.p2f[element.group13]) this.p2f[element.group13] += 1; else this.p2f[element.group13] = 1; }
        if (element.group14) { if (this.p3a[element.group14]) this.p3a[element.group14] += 1; else this.p3a[element.group14] = 1; }
        if (element.group15) { if (this.p4a[element.group15]) this.p4a[element.group15] += 1; else this.p4a[element.group15] = 1; }
        if (element.group16) { if (this.p4b[element.group16]) this.p4b[element.group16] += 1; else this.p4b[element.group16] = 1; }
        if (element.group17) { if (this.p4c[element.group17]) this.p4c[element.group17] += 1; else this.p4c[element.group17] = 1; }
        if (element.group18) { if (this.p5a[element.group18]) this.p5a[element.group18] += 1; else this.p5a[element.group18] = 1; }
        if (element.group19) { if (this.p5b[element.group19]) this.p5b[element.group19] += 1; else this.p5b[element.group19] = 1; }
        if (element.group20) { if (this.p5c[element.group20]) this.p5c[element.group20] += 1; else this.p5c[element.group20] = 1; }
        if (element.group21) { if (this.p5d[element.group21]) this.p5d[element.group21] += 1; else this.p5d[element.group21] = 1; }
        if (element.group22) { if (this.p6a[element.group22]) this.p6a[element.group22] += 1; else this.p6a[element.group22] = 1; }
        if (element.group23) { if (this.p6b[element.group23]) this.p6b[element.group23] += 1; else this.p6b[element.group23] = 1; }

      });
      this.for1();
      this.for2();
      this.for3();
      this.for4();
      this.for5();
      this.for6();
      this.for7();
      this.for8();
      this.for9();
      this.for10();
      this.for11();
      this.for12();
    });
  }

  for1 = () => {
    for (var key in this.p1) {
      let singleentry = { name: key, value: this.p1[key] }
      this.p1Data.push(singleentry);
    }
    for (var key in this.p2) {
      let singleentry = { name: key, value: this.p2[key] }
      this.p2Data.push(singleentry);
    }
  }

  for2 = () => {
    for (var key in this.p3) {
      let singleentry = { name: key, value: this.p3[key] }
      this.p3Data.push(singleentry);
    }
    for (var key in this.p3b) {
      let singleentry = { name: key, value: this.p3b[key] }
      this.p3bData.push(singleentry);
    } 
  }

  for3 = () => {
    for (var key in this.p4) {
      let singleentry = { name: key, value: this.p4[key] }
      this.p4Data.push(singleentry);
    }
    for (var key in this.p5) {
      let singleentry = { name: key, value: this.p5[key] }
      this.p5Data.push(singleentry);
    }
  }

  for4 = () => {
    for (var key in this.p6) {
      let singleentry = { name: key, value: this.p6[key] }
      this.p6Data.push(singleentry);
    }
    for (var key in this.p7) {
      let singleentry = { name: key, value: this.p7[key] }
      this.p7Data.push(singleentry);
    }
  }

  for5 = () => {
    for (var key in this.p2a) {
      let singleentry = { name: key, value: this.p2a[key] }
      this.p2aData.push(singleentry);
    }
    for (var key in this.p2b) {
      let singleentry = { name: key, value: this.p2b[key] }
      this.p2bData.push(singleentry);
    }
  }

  for6 = () => {
    for (var key in this.p2c) {
      let singleentry = { name: key, value: this.p2c[key] }
      this.p2cData.push(singleentry);
    }
    for (var key in this.p2d) {
      let singleentry = { name: key, value: this.p2d[key] }
      this.p2dData.push(singleentry);
    }
  }

  for7 = () => {
    for (var key in this.p2e) {
      let singleentry = { name: key, value: this.p2e[key] }
      this.p2eData.push(singleentry);
    }
    for (var key in this.p2f) {
      let singleentry = { name: key, value: this.p2f[key] }
      this.p2fData.push(singleentry);
    }
  }

  for8 = () => {
    for (var key in this.p3a) {
      let singleentry = { name: key, value: this.p3a[key] }
      this.p3aData.push(singleentry);
    }
    for (var key in this.p4a) {
      let singleentry = { name: key, value: this.p4a[key] }
      this.p4aData.push(singleentry);
    }
  }

  for9 = () => {
    for (var key in this.p4b) {
      let singleentry = { name: key, value: this.p4b[key] }
      this.p4bData.push(singleentry);
    }
    for (var key in this.p4c) {
      let singleentry = { name: key, value: this.p4c[key] }
      this.p4cData.push(singleentry);
    }
  }

  for10 = () => {
    for (var key in this.p5a) {
      let singleentry = { name: key, value: this.p5a[key] }
      this.p5aData.push(singleentry);
    }
    for (var key in this.p5b) {
      let singleentry = { name: key, value: this.p5b[key] }
      this.p5bData.push(singleentry);
    }
  }

  for11 = () => {
    for (var key in this.p5c) {
      let singleentry = { name: key, value: this.p5c[key] }
      this.p5cData.push(singleentry);
    }
    for (var key in this.p5d) {
      let singleentry = { name: key, value: this.p5d[key] }
      this.p5dData.push(singleentry);
    }
  }

  for12 = () => {
    for (var key in this.p6a) {
      let singleentry = { name: key, value: this.p6a[key] }
      this.p6aData.push(singleentry);
    }
    for (var key in this.p6b) {
      let singleentry = { name: key, value: this.p6b[key] }
      this.p6bData.push(singleentry);
    }
  }

}
