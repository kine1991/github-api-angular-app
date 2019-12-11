import { Injectable } from '@angular/core';
import { ProfileResponse } from './profile.model';
import { environment } from 'src/environments/environment';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(
    private http: HttpClient
  ) { }

  searchProfiles(name){
    return this.http.get<ProfileResponse>(`${environment.url}${name}`).pipe(
      delay(1000)
    )
  }

  getProfile(name){
    return this.http.get(`${environment.githubUrl}/users/${name}`).pipe(
      delay(1000)
    )
  }

  getRepos(name){
    return this.http.get(`${environment.githubUrl}/users/${name}/repos`).pipe(
      delay(1000)
    )
  }
}
