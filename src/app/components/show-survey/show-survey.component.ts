import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../../shared/survey.service';
import { Survey } from '../../shared/survey';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-show-survey',
  templateUrl: './show-survey.component.html',
  styleUrls: ['./show-survey.component.css']
})
export class ShowSurveyComponent implements OnInit {

  public survey: Survey;
  name = '';  group1 = 0;  group2 = 0;  group3 = 0;  group3b = '';  group4 = 0;  group5 = 0;
  group6 = 0;  group7 = '';  group8: 0;  group9: 0;  group10: 0;  group11: 0;  group12: 0;
  group13: 0;  group14: '';  group15: 0;  group16: 0;  group17: 0;  group18: 0;  group19: 0;
  group20: 0;  group21: 0;  group22: 0;  group23: '';

  constructor(
    private surveyApi: SurveyService,
    private location: Location,
    private actRouter: ActivatedRoute//,
    //  public survey: Survey
  ) { }

  ngOnInit() {
    const key = this.actRouter.snapshot.paramMap.get('key');
    this.surveyApi.getSurvey(key).valueChanges().subscribe(data => {
      console.log(data);
      this.name = data.name;
      this.group1 = data.group1;
      this.group2 = data.group2;
      this.group3 = data.group3;
      this.group3b = data.group3b;
      this.group4 = data.group4;
      this.group5 = data.group5;
      this.group6 = data.group6;
      this.group7 = data.group7;
      this.group8 = data.group8;
      this.group9 = data.group9;
      this.group10 = data.group10;
      this.group11 = data.group11;
      this.group12 = data.group12;
      this.group13 = data.group13;
      this.group14 = data.group14;
      this.group15 = data.group15;
      this.group16 = data.group16;
      this.group17 = data.group17;
      this.group18 = data.group18;
      this.group19 = data.group19;
      this.group20 = data.group20;
      this.group21 = data.group21;
      this.group22 = data.group22;
      this.group23 = data.group23;
    });
  }

  goBack() {
    this.location.back();
  }
}
