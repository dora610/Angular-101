import { Component, OnInit } from '@angular/core';
// TODO: refactor - move firebase storage & db to separate injectable service
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { DbService } from 'src/app/services/db.service';
import { StorageService } from 'src/app/services/storage.service';
import { imageConfig } from 'src/utils/config';

const { v4: uuidv4 } = require('uuid');
@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css'],
})
export class AddpostComponent implements OnInit {
  locationName!: string;
  description!: string;
  uploadPercent: number | undefined;
  picture: string | undefined;
  user: any;

  constructor(
    private auth: AuthService,
    private router: Router,
    private toast: ToastrService,
    private db: AngularFireDatabase,
    private store: AngularFireStorage,
    private dbService: DbService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.auth.getUser()(
      (user) => {
        if (user) {
          this.dbService
            .getData(`/users/${user.uid}`)
            .subscribe((user) => (this.user = user));
        } else {
          throw new Error('session expired')
        }
      },
      (err) => {
        console.error(err);
        this.auth.signOut();
        this.router.navigateByUrl('/signin');
      }
    );
  }

  onSubmit() {
    // validate post inputs

    let postId = uuidv4();

    let post = {
      id: postId,
      loc: this.locationName,
      desc: this.description,
      picUrl: this.picture,
      by: this.user.name,
      instaId: this.user.instaUsername,
      createdAt: Date.now(),
    };

    this.dbService
      .addData(`posts/${postId}`, post)
      .then((_) => {
        this.toast.success('Successfully uploaded your post');
        this.router.navigateByUrl('/');
      })
      .catch((err) => {
        console.error(err);
        this.toast.error(err);
      });
  }

  uploadFile(event: any) {
    const file = event.target.files[0];

    this.storageService.uploadImage(
      file,
      'posts',
      (percent) => {
        this.uploadPercent = percent;
      },
      (url) => {
        this.picture = url;
        this.toast.success('Successfully uploaded image');
      }
    );
  }
}
