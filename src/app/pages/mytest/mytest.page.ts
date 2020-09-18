import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

interface TestData {
  Q1: number;
  Q2: number;
  Q3: number;
  Q4: number;
  Q5: number;
}
@Component({
  selector: 'app-mytest',
  templateUrl: './mytest.page.html',
  styleUrls: ['./mytest.page.scss'],
})


export class MytestPage {

  testList = [];
  testData: TestData;
  testForm: FormGroup;

  constructor(
    private firebaseService: FirebaseService,
    public fb: FormBuilder
  ) {
    this.testData = {} as TestData;
  }

  ngOnInit() {

    this.testForm = this.fb.group({
      Q1: ['', [Validators.required]],
      Q2: ['', [Validators.required]],
      Q3: ['', [Validators.required]],
      Q4: ['', [Validators.required]],
      Q5: ['', [Validators.required]]
    })

    this.firebaseService.read_test().subscribe(data => {

      this.testList = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Q1: e.payload.doc.data()['Q1'],
          Q2: e.payload.doc.data()['Q2'],
          Q3: e.payload.doc.data()['Q3'],
          Q4: e.payload.doc.data()['Q4'],
          Q5: e.payload.doc.data()['Q5'],
        };
      })
      console.log(this.testList);

    });
  }

  CreateRecord() {
    console.log(this.testForm.value);
    this.firebaseService.create_test(this.testForm.value).then(resp => {
      this.testForm.reset();
    })
      .catch(error => {
        console.log(error);
      });
  }

  RemoveRecord(rowID) {
    this.firebaseService.delete_test(rowID);
  }

  EditRecord(record) {
    record.isEdit = true;
    record.EditQ1 = record.Q1;
    record.EditQ2 = record.Q2;
    record.EditQ3 = record.Q3;
    record.EditQ4 = record.Q4;
    record.EditQ5 = record.Q5;
  }

  UpdateRecord(recordRow) {
    let record = {};
    record['Q1'] = recordRow.EditQ1;
    record['Q2'] = recordRow.EditQ2;
    record['Q3'] = recordRow.EditQ3;
    record['Q4'] = recordRow.EditQ4;
    record['Q5'] = recordRow.EditQ5;
    this.firebaseService.update_test(recordRow.id, record);
    recordRow.isEdit = false;
  }

}
