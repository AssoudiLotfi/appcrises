import { Component, OnInit } from '@angular/core';
import { RouterModule,Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'ajoutdefaut',
  styleUrls:['./ajoutdefaut.component.css'],
  templateUrl:'./ajoutdefaut.component.html',
})
export class AjoutdefautComponent implements OnInit { 

constructor(private route : ActivatedRoute, private router : Router){}

 ngOnInit() {
   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
   //Add 'implements OnInit' to the class.
   
 }
godefaut() {
   this.router.navigate(['defaut']);
   
 }
  gohome() {
   this.router.navigate(['home']);
   
 }
}