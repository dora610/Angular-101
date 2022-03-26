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

  getData(obj: string) {
    return this.db.object(obj).valueChanges();
  }

  deleteData(obj: string) {
    return this.db.object(obj).remove();
  }

  updateData(obj: string, updatedData: any) {
    return this.db.object(obj).update(updatedData);
  }
}
