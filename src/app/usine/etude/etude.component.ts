import { Component, OnInit } from '@angular/core';
import { RouterModule,Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'etude',
  styleUrls:[''],
  templateUrl:'./etude.component.html',
})
export class EtudeComponent implements OnInit { 

constructor(private route : ActivatedRoute, private router : Router){}

 ngOnInit() {
   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
   //Add 'implements OnInit' to the class.
   
 }
 gotable() {
   this.router.navigate(['table']);
 }
 
}