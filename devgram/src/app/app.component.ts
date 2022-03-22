import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string
  constructor(private auth: AuthService){
    this.title = 'Welcome to devgram'
  }

  ngOnInit(): void {
    this.auth.getUser().subscribe({
      next: (user)=> console.log(user?.uid, user?.email),
      error: (err)=>console.error(err)
    })
  }
  
}
