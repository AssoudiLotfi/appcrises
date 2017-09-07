import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { UsineService } from '../service/usine.service';
@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  getuser: any;
  getusine: any;
  nom: any;
  constructor(private route: ActivatedRoute, private router: Router, private usineService: UsineService) {



  }

  ngOnInit() {
    this.getuser = JSON.parse(localStorage.getItem('currentUser')).nom;
     this.usineService.getUsine(1)
      .subscribe(
      (response) => {
      this.getusine = response.nom;
       },
      (error) => console.log("error : " + error)
      );

  }


  gologin() {
    this.router.navigate(['login']);
  }
  gocrise() {
    this.router.navigate(['crise']);
  }
  golot() {
    this.router.navigate(['lot']);
  }
  godefaut() {
    this.router.navigate(['defaut']);
  }
}