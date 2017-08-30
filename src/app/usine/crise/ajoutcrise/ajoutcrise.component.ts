import { Component, OnInit } from '@angular/core';
import { RouterModule,Router, ActivatedRoute} from '@angular/router';
import { CriseService } from '../../service/crise.service';

@Component({
  selector: 'ajoutcrise',
  styleUrls:['./ajoutcrise.component.css'],
  templateUrl:'./ajoutcrise.component.html',

})
export class AjoutcriseComponent implements OnInit { 
 model: any = {
   progression :"New"
   
 };
constructor(private route : ActivatedRoute, private router : Router, private criseService : CriseService){}

 ngOnInit() {
   
   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
   //Add 'implements OnInit' to the class.
   
 }
 save(model:any){
   model.usine_idusine = JSON.parse(localStorage.getItem('currentUser')).usine_idusine;
   console.log(model);
   this.criseService.save(model);
   this.router.navigate(['home/crise']);

 }
godefaut() {
   this.router.navigate(['defaut']);
   
 }
 gohome() {
   this.router.navigate(['home/crise']);
   
 }
}