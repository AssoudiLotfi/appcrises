import { Component, OnInit } from '@angular/core';
import { RouterModule,Router, ActivatedRoute} from '@angular/router';
import {LotService} from '../service/lot.service';

import { Subject } from 'rxjs/Subject';
@Component({
  selector: 'lot',
  styleUrls:['./lot.component.css'],
  templateUrl:'./lot.component.html',
  
})
export class LotComponent implements OnInit { 
    getdata : any[] ;
    loading = false;
  results: Object;
  searchTerm$ = new Subject<string>();

constructor( private route : ActivatedRoute, private router : Router,private lotService: LotService){
 
}
 ngOnInit() {
    this.loading = true;
        this.lotService.getListLot()
          .subscribe(
          (response) => { this.getdata = response;
             console.log(this.getdata);
          },
          (error) => console.log("error : " + error)
            );
  
 }

 goAjoutlot() {
   this.router.navigate(['home/ajoutlot']);
 }
  doSomething(){
     
 }
}