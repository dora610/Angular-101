import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {
  faShareSquare, faThumbsDown,
  faThumbsUp
} from '@fortawesome/free-regular-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit, OnChanges {
  @Input()
  post!: any;

  faThumbsDown = faThumbsDown;
  faThumbsUp = faThumbsUp;
  faShareSquare = faShareSquare;

  uid: string = '';
  upvote: number = 0;
  downvote: number = 0;

  constructor(private auth: AuthService, private dbService: DbService) {}

  ngOnInit(): void {
    this.auth.getUser()((user) => {
      if (user) {
        this.uid = user?.uid;
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const prop in changes) {
      if (prop === 'post') {
        let votes = changes[prop].currentValue['vote'];
        let voteType: any|null = Object.values(votes)[0];
        if (voteType.upvote) {
          this.upvote += 1;
        }
        if (voteType.downvote) {
          this.downvote += 1;
        }
      }
    }
  }

  markUpVote() {
    this.dbService
      .addData(`/posts/${this.post.id}/vote/${this.uid}`, {
        upvote: 1,
      })
      .catch((err) => console.error(err));
  }

  markDownVote() {
    this.dbService
      .addData(`/posts/${this.post.id}/vote/${this.uid}`, {
        downvote: 1,
      })
      .catch((err) => console.error(err));
  }

  // TODO: make a directive or pipe and generate it in html
  getInstaUrl() {
    return `https://instagram/${this.post.instaId}`;
  }
}
