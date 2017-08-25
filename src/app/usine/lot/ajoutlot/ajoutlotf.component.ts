import { Component, OnInit } from '@angular/core';
import { RouterModule,Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'Ajoutlot',
  styleUrls:['./ajoutlot.component.css'],
  templateUrl:'./ajoutlot.component.html',
})
export class AjoutlotComponent implements OnInit { 

constructor(private route : ActivatedRoute, private router : Router){}

 ngOnInit() {
   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
   //Add 'implements OnInit' to the class.
   
 }
  gohome() {
   this.router.navigate(['home']);
 }
 
}