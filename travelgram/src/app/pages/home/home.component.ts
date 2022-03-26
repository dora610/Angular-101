import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isLoading: boolean = false;
  posts = [];
  users = [];

  constructor(
    private dbService: DbService,
    private auth: AuthService,
    private db: AngularFireDatabase,
    private toast: ToastrService
  ) {
    this.isLoading = true;
  }

  ngOnInit(): void {
    this.dbService.getData('users').subscribe({
      next: (obj) => {
        if (obj) {
          this.users = Object.values(obj as any);
          this.isLoading = false;
        } else {
          this.users = [];
          this.isLoading = false;
          this.toast.error('No user found in db');
        }
      },
      error: (err) => console.error(err),
    });

    this.dbService.getData('posts').subscribe({
      next: (res) => {
        if (res) {
          this.posts = Object.values(res as any);
          this.posts = this.posts.sort((a:any, b:any)=> b.createdAt - a.createdAt)
          this.isLoading = false;
        } else {
          this.posts = [];
          this.isLoading = false;
          this.toast.error('No posts to show');
        }
      },
      error: (err) => console.error(err),
    });
  }
}
