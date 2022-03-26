import { Injectable } from '@angular/core';
import {
  AngularFireStorage,
  AngularFireStorageReference,
} from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';

import { imageConfig } from 'src/utils/config';
const { readAndCompressImage } = require('browser-image-resizer');

const { v4: uuidv4 } = require('uuid');
@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private fireStore: AngularFireStorage) {}

  async uploadImage(
    file: any,
    uploadFolder: string,
    monitorProgress: (progress: number | undefined) => void,
    getDownloadUrl: (url: string) => void
  ) {
    // resize the image
    const resizedImage = await readAndCompressImage(file, imageConfig);

    // generate fileref
    const filePath: string = uploadFolder + '/' + uuidv4();
    const fileRef: AngularFireStorageReference = this.fireStore.ref(filePath);

    //upload task
    const task = this.fireStore.upload(filePath, file);

    // observe percentage upload progress
    task.percentageChanges().subscribe((progess) => monitorProgress(progess));

    // get the file upload url
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => getDownloadUrl(url));
        })
      )
      .subscribe();
  }
}
