import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user:any;
  
  constructor(private userService: UserService, private toastr: ToastrService ){}

  fetchUser(){
    this.userService.getUser().subscribe(
      (user)=> this.user = user.results[0]
    )
  }

  ngOnInit(): void {
    this.fetchUser()
  }
  
  newUserRequest(){
    this.fetchUser()
  }
  
}
