import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { User } from 'src/model/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any|null = null;
  userName!:string
  error : string | null = null
  
  constructor(private ghService: GithubService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  handleFindUser(){
    this.ghService.getUserDetails(this.userName).subscribe({
      next: (user)=>{
        console.log(user);
        this.user = user
        this.error = null
        this.ref.detectChanges()
      },
      error: (err)=>{
        console.error(err);
        this.user = null;
        this.error = 'User not found'
        this.ref.detectChanges()
      }
    })
  }

}
