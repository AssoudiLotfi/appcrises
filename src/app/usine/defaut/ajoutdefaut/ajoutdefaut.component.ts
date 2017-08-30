import { Component, OnInit } from '@angular/core';
import { RouterModule,Router, ActivatedRoute} from '@angular/router';
import { DefautService} from '../../service/defaut.service'
@Component({
  selector: 'ajoutdefaut',
  styleUrls:['./ajoutdefaut.component.css'],
  templateUrl:'./ajoutdefaut.component.html',
})
export class AjoutdefautComponent implements OnInit { 
  model: any = {
    progression :"New"
    
  };
constructor(private route : ActivatedRoute,private defautService : DefautService, private router : Router){}

 ngOnInit() {
   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
   //Add 'implements OnInit' to the class.
   
 }
 save(model : any){
  model.lot_idlot = 2;
  console.log(model);
  this.defautService.save(model);
  this.router.navigate(['home/defaut']); 
 }
godefaut() {
   this.router.navigate(['defaut']);
   
 }
  gohome() {
   this.router.navigate(['home']);
   
 }
}