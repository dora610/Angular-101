import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ChangeDetectorRef,
} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css'],
})
export class ReposComponent implements OnInit, OnChanges {
  @Input()
  repoUrl!: string;

  repos: any = [];

  constructor(
    private ghService: GithubService,
    private changeRef: ChangeDetectorRef,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {}

  /* ngOnChanges(): void {
    
    if(this.repoUrl){
      console.log(this.repoUrl);
      
      this.ghService.getRepos(this.repoUrl).subscribe({
        next: (repos)=>{
          this.repos = repos;
          this.changeRef.detectChanges()
        },
        error: (err)=>{
          console.error(err);
          this.toast.error(err)
        }
      })
    }
  } */

  fetchRepos(url:string){
    this.ghService.getRepos(url).subscribe({
      next: (repos) => {
        // this.repos = repos;
        // this.changeRef.detectChanges()
        this.repos = repos;
      },
      error: (err) => {
        console.error(err);
        this.toast.error(err);
      },
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (propName === 'repoUrl') {
        let newRepoUrl = changes['repoUrl'].currentValue;
        this.fetchRepos(newRepoUrl)
        // this.repoUrl = newRepoUrl;
        console.log(this.repoUrl);
      }
    }
  }
}
