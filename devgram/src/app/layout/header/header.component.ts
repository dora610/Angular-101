import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  email: string | null | undefined = null;
  constructor(
    private auth: AuthService,
    private router: Router,
    private toast: ToastrService
  ) {
    auth.getUser().subscribe((user) => {
      console.table(user);
      this.email = user?.email;
    });
  }

  ngOnInit(): void {}

  async handleSignOut() {
    try {
      const res = await this.auth.signOut();
      this.email = null;
      this.toast.info('Login again to continue');
      this.router.navigateByUrl('/signin');
    } catch (error: any) {
      console.error(error);
      this.toast.error('Something is wrong');
    }
  }
}
