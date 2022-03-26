import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  constructor(private db: AngularFireDatabase) {}

  // TODO: create model- data: User|Post
  addData(dataRef: string, data: any) {
    return this.db.object(dataRef).set(data);
  }

  getData(dataRef: string) {
    return this.db.object(dataRef).valueChanges();
  }

  deleteData(dataRef: string) {
    return this.db.object(dataRef).remove();
  }

  updateData(dataRef: string, updatedData: any) {
    return this.db.object(dataRef).update(updatedData);
  }
}
