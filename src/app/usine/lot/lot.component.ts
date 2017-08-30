import { Component, OnInit } from '@angular/core';
import { RouterModule,Router, ActivatedRoute} from '@angular/router';
import {LotService} from '../service/lot.service';
import {SearchPipe} from '../filter/pipe';
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

  idcrise: number;
  private sub: any;


constructor( private route : ActivatedRoute, private router : Router,private lotService: LotService){
 
}
 ngOnInit() {
   this.sub = this.route
      .queryParams
      .subscribe(params => {
        
        this.idcrise = +params['idcrise'];

        this.loading = true;
        console.log(params)

        if (this.idcrise) {
 
          this.lotService.getLotByIdCrise(this.idcrise)
          .subscribe(
            (response) => {this.getdata = response;
               console.log(this.getdata);
             },
          (error) => console.log("error : " + error)
            );
        } else {
          this.lotService.getListLot()
          .subscribe(
          (response) => { this.getdata = response;
             console.log(this.getdata);
          },
          (error) => console.log("error : " + error)
            );
        }
        
            
      });
  
 }

ngOnDestroy() {
    this.sub.unsubscribe();
  }

 goAjoutlot() {
   this.router.navigate(['home/ajoutlot']);
 }
  doSomething(){
     
 }
}