import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  collectionName = 'Test';

  constructor(
    private firestore: AngularFirestore
  ) { }

  create_test(record) {
    return this.firestore.collection(this.collectionName).add(record);
  }

  read_test() {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  update_test(recordID, record) {
    this.firestore.doc(this.collectionName + '/' + recordID).update(record);
  }

  delete_test(record_id) {
    this.firestore.doc(this.collectionName + '/' + record_id).delete();
  }
}
