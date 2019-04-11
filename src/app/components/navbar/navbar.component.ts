import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  FreeGo_LOGO(){
    this.router.navigate(['']);   
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.getElementById('L_home').style.display = "inline-block"
    document.getElementById('L_service').style.display = "inline-block"
    document.getElementById('L_add').style.display = "inline-block"
    document.getElementById('L_safety').style.display = "inline-block"
    document.getElementById('L_friend').style.display = "inline-block"
  }

  FreeGo_Home() {
    document.querySelector('#FreeGo_Main').scrollIntoView({ behavior: 'smooth' });
  }

  FreeGo_Service() {
    document.querySelector('#Kiwi_ServiceIn').scrollIntoView({ behavior: 'smooth' });
  }

  FreeGo_AddMethod() {
    document.querySelector('#Kiwi_AddHOW').scrollIntoView({ behavior: 'smooth' });
  }

  FreeGo_Safety() {
    document.querySelector('#Kiwi_Safety').scrollIntoView({ behavior: 'smooth' });
  }

  FreeGo_Alliance() {
    document.querySelector('#FreeGo_FriendShip').scrollIntoView({ behavior: 'smooth' });
  }

}

  // KIWI_Home() {
  //   document.body.scrollTop = 0;
  //   document.documentElement.scrollTop = 0;
  // }
