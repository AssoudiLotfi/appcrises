import { Component, OnInit } from '@angular/core';
import { RouterModule,Router, ActivatedRoute} from '@angular/router';
import { CriseService } from '../service/crise.service';
import {SearchPipe} from '../filter/pipe';

@Component({
  selector: 'crise',
  styleUrls:['./crise.component.css'],
  templateUrl:'./crise.component.html',
  providers: [CriseService]
  
})

export class CriseComponent implements OnInit { 
    getdata : any[] ;
    loading = false;
    
    


constructor(private route : ActivatedRoute, private router : Router,
private criseService: CriseService){
}
 ngOnInit() {
   
    this.loading = true;
    
        this.criseService.getCriseListByUsine(JSON.parse(localStorage.getItem('currentUser')).usine_idusine)
          .subscribe(
          (response) => { this.getdata = response;
             console.log(this.getdata);
          },
          (error) => console.log("error : " + error)
            );
  
 }
 delete(idcrise : number){
   
   console.log(idcrise);
   this.criseService.delete(idcrise);
  
 }
 savecrise(){
   
 }
refresh(){
  this.router.navigate(["crise"]);
}

 goAcrise() {
   this.router.navigate(['home/ajoutcrise']);
 }



 doSomething(){
      
 }

 
 
}