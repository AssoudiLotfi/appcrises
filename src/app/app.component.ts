import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'my-app',
  styleUrls:[],
  templateUrl:'./app.component.html',
})

export class AppComponent  implements OnInit{ 
 constructor(private route : ActivatedRoute, private router : Router){}

 ngOnInit() {
   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
   //Add 'implements OnInit' to the class.
 }
   gocontact() {
   this.router.navigate(['/table']);
   
 }
 gocrise() {
   this.router.navigate(['/crise']);
   
 }
  godefaut() {
   this.router.navigate(['/defaut']);
   
 }
 golot() {
   this.router.navigate(['/lot']);
   
 }
 goetude() {
   this.router.navigate(['/etude']);
   
 }
 }
 

