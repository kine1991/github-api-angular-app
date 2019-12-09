import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  playerName

  constructor() { }

  ngOnInit() {
  }


  onKey(event) {
    const inputValue = event.target.value;
    console.log(inputValue)
  }

  search(){
    console.log(this.playerName)
    this.playerName = ''
  }

}
