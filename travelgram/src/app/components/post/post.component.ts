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




const {readAndCompressImage} = require('browser-image-resizer');

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  locationName!:string
  description!: string
  uploadPercent: number = 0
  picture: string|undefined

  constructor(
    private auth: AuthService,
    private router: Router,
    private toast: ToastrService,
    private db: AngularFireDatabase,
    private store: AngularFireStorage
  ) {}

  ngOnInit(): void {
  }

  onSubmit(){
    //
  }

  uploadFile(event: any){
    //
  }
  
}
