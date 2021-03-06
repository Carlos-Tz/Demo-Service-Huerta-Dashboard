import { Injectable } from '@angular/core';
import { Survey } from '../shared/survey';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  surveysList: AngularFireList<any>;
  surveyObject: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }


  GetSurveysList(){
    this.surveysList = this.db.list('surveys-list', ref =>
      ref.orderByChild('date')
    );
    return this.surveysList;
  }

  getAll(){
    return this.db.list('surveys-list')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({key: c.payload.key, ...c.payload.val() }));
        })
      );
  }

  getSurvey(key: string){
    this.surveyObject = this.db.object('surveys-list/'+ key);
    return this.surveyObject;
  }
  
}
