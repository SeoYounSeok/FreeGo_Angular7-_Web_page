import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById('L_home').style.display = "inline-block"
    document.getElementById('L_service').style.display = "inline-block"
    document.getElementById('L_add').style.display = "inline-block"
    document.getElementById('L_safety').style.display = "inline-block"
    document.getElementById('L_friend').style.display = "inline-block"
  }

}
