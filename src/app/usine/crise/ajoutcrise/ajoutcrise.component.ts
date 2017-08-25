import { Component, OnInit } from '@angular/core';
import { RouterModule,Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'ajoutcrise',
  styleUrls:['./ajoutcrise.component.css'],
  templateUrl:'./ajoutcrise.component.html',

})
export class AjoutcriseComponent implements OnInit { 

constructor(private route : ActivatedRoute, private router : Router){}

 ngOnInit() {
   
   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
   //Add 'implements OnInit' to the class.
   
 }
 save(){
 
 }
godefaut() {
   this.router.navigate(['defaut']);
   
 }
 gohome() {
   this.router.navigate(['home/crise']);
   
 }
}