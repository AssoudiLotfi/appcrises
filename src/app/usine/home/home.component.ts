import { Component, OnInit } from '@angular/core';
import { RouterModule,Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'home',
  styleUrls:['./home.component.css'],
  templateUrl:'./home.component.html',
})
export class HomeComponent implements OnInit { 

constructor(private route : ActivatedRoute, private router : Router){


   
}

 ngOnInit() {
   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
   //Add 'implements OnInit' to the class.
   
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