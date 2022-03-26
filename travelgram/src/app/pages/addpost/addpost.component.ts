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
  uploadPercent: number = 0;
  picture: string | undefined;

  constructor(
    private auth: AuthService,
    private router: Router,
    private toast: ToastrService,
    private db: AngularFireDatabase,
    private store: AngularFireStorage,
    private dbService: DbService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    let post = {
      locationName: this.locationName,
      description: this.description,
      picture: this.picture,
    };

    let postId = uuidv4();

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
    //
  }
}
