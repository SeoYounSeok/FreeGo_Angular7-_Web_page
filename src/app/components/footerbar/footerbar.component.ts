import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-footerbar',
  templateUrl: './footerbar.component.html',
  styleUrls: ['./footerbar.component.css']
})
export class FooterbarComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    document.getElementById('L_home').style.display = "none"
    document.getElementById('L_service').style.display = "none"
    document.getElementById('L_add').style.display = "none"
    document.getElementById('L_safety').style.display = "none"
    document.getElementById('L_friend').style.display = "none"
  }
  policy_personal_info(){
    this.router.navigate(['/policy-personal-info']);   
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.getElementById('L_home').style.display = "none"
    document.getElementById('L_service').style.display = "none"
    document.getElementById('L_add').style.display = "none"
    document.getElementById('L_safety').style.display = "none"
    document.getElementById('L_friend').style.display = "none"

  }
  policy_service(){
    this.router.navigate(['/policy-service']); 
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.getElementById('L_home').style.display = "none"
    document.getElementById('L_service').style.display = "none"
    document.getElementById('L_add').style.display = "none"
    document.getElementById('L_safety').style.display = "none"
    document.getElementById('L_friend').style.display = "none"
  }
  policy_location(){
    this.router.navigate(['/policy-location']);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.getElementById('L_home').style.display = "none"
    document.getElementById('L_service').style.display = "none"
    document.getElementById('L_add').style.display = "none"
    document.getElementById('L_safety').style.display = "none"
    document.getElementById('L_friend').style.display = "none"
  }
  policy_rent(){
    this.router.navigate(['/policy-rent']);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.getElementById('L_home').style.display = "none"
    document.getElementById('L_service').style.display = "none"
    document.getElementById('L_add').style.display = "none"
    document.getElementById('L_safety').style.display = "none"
    document.getElementById('L_friend').style.display = "none"
  }

}
