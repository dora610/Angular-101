import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'TravelGram';
  email!: string | null;

  constructor(
    private auth: AuthService,
    private router: Router,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.auth.getUser()(
      (user) => {
        if (user) {
          this.email = user.email;
        } else {
          this.router.navigateByUrl('/signin')
          this.email = null;
        }
      },
      (err) => {
        console.error(err);
        this.toast.error(err.message);
      }
    );
  }

  signOutHandler() {
    this.auth
      .signOut()
      .then(() => {
        this.router.navigateByUrl('/signin');
        this.email = null;
      })
      .catch((err) => {
        console.error(err);
        this.toast.error('Opps!! error occurred');
      });
  }
}
