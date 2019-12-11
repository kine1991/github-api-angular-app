import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { delay, switchMap, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-body',
  templateUrl: './profile-body.component.html',
  styleUrls: ['./profile-body.component.scss']
})
export class ProfileBodyComponent implements OnInit {

  repos;
  profile;
  isLoadingProfile = false;
  isLoadingRepo = false;

  constructor(
    private githubService: GithubService,
    private route: ActivatedRoute,
    
  ) { }

  ngOnInit() {
    // console.log('singleProfile ',this.singleProfile)
    this.route.queryParamMap.pipe(
      tap(() => {
        this.isLoadingRepo = true;
      }),
      switchMap(params => {
        return this.githubService.getRepos(params.get('username'));
      })
    )
    .subscribe(repos => {
      this.repos = repos;
      this.isLoadingRepo = true;
      console.log(repos)
    });

    this.route.queryParamMap.pipe(
      tap(() => {
        this.isLoadingProfile = true;
      }),
      switchMap(params => {
        return this.githubService.getProfile(params.get('username'));
      })
    )
    .subscribe(profile => {
      this.profile = profile;
      this.isLoadingProfile = false;
      console.log(profile)
    });
  }

}
