import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

interface ProfileResponse {
  incomplete_results: boolean
  items: []
  total_count: number
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  name
  profiles

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }


  onKey(event) {
    const inputValue = event.target.value;
    console.log(inputValue)
    event.target.value = ''
  }

  search(){
    // console.log(this.name)
    this.http.get<ProfileResponse>(`${environment.url}${this.name}`).subscribe(items => {
      console.log(items.items)
      this.profiles = items.items;
    })
    this.name = ''
  }

}
