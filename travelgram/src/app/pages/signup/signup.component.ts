import { Component, OnInit } from '@angular/core';
// TODO: refactor - move firebase storage & db to separate injectable service
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { imageConfig } from 'src/utils/config';

const { v4: uuidv4 } = require('uuid');




const { readAndCompressImage } = require('browser-image-resizer');

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  picture: string =
    'https://learnyst.s3.amazonaws.com/assets/schools/2410/resources/images/logo_lco_i3oab.png';
  uploadPercent: number | undefined = 0;

  constructor(
    private auth: AuthService,
    private router: Router,
    private toast: ToastrService,
    private db: AngularFireDatabase,
    private store: AngularFireStorage
  ) {}

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    const { name, email, password, username, country, bio } = f.form.value;

    // TODO: form sanitization

    this.auth
      .signUp(email, password)
      .then((res) => {
        console.log(res);
        const uid = res.user?.uid;
        this.db.object(`/users/${uid}`).set({
          id: uid,
          name,
          email,
          password,
          instaUsername: username,
          country,
          bio,
          picture: this.picture, // default image ref
        });
      })
      .then((_) => {
        this.router.navigateByUrl('/signin');
        this.toast.success('Successfully signed up🤘');
      })
      .catch((err) => {
        console.error(err);
        this.toast.error(err);
      });
  }

  // TODO: change type of event
  async uploadFile(event: any) {
    let file = event.target.files[0];

    let resizedImg = await readAndCompressImage(file, imageConfig);

    const filePath = 'profile/' + uuidv4();
    const fileRef = this.store.ref(filePath);

    const task = this.store.upload(filePath, resizedImg);

    // observe percentage upload progress
    task
      .percentageChanges()
      .subscribe((progress) => (this.uploadPercent = progress));

    // get the file upload url
    task
      .snapshotChanges()
      .pipe(
        finalize(() =>
          fileRef.getDownloadURL().subscribe((url) => {
            this.picture = url;
            this.toast.success('Successfully uploaded image');
          })
        )
      )
      .subscribe();
  }
}
