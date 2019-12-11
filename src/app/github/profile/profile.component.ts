import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { GithubService } from '../github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  name
  profiles
  username
  singleProfile
  isLoading = false
  isLoadingBody

  constructor(
    private route: ActivatedRoute,
    private githubService: GithubService
  ) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      this.username = params.get('username')
    })
  }


  onKey(event) {
    const inputValue = event.target.value;
    this.isLoading = true
    this.githubService.searchProfiles(inputValue)
    .subscribe(items => {
      this.profiles = items.items;
      this.isLoading = false;
    })
    event.target.value = ''
  }

  search(){
    this.isLoading = true
    this.githubService.searchProfiles(this.name)
    .subscribe(items => {
      this.profiles = items.items;
      this.isLoading = false;
    })
    this.name = ''
  }

  getProfile(profile){
    this.singleProfile = profile
    // console.log(profile)
  }

}

