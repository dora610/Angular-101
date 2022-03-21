import { Component, Input, OnChanges, OnInit, SimpleChanges, ChangeDetectorRef } from '@angular/core';
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

  constructor(private ghService: GithubService, private changeRef: ChangeDetectorRef) {}

  ngOnInit(): void {}
  
  ngOnChanges(): void {
    if(this.repoUrl){
      this.ghService.getRepos(this.repoUrl).subscribe((repos)=>{
        this.repos = repos;

        this.changeRef.detectChanges()
      },
      (err)=>{
        console.error(err);
      })
    }
  }
}
