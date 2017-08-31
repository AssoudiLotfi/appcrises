import { Component, OnInit } from '@angular/core';
import { RouterModule,Router, ActivatedRoute} from '@angular/router';
import {DefautService} from '../service/defaut.service';
import {SearchPipe} from '../filter/pipe';

@Component({
  selector: 'defaut',
  styleUrls:['./defaut.component.css'],
  templateUrl:'./defaut.component.html',
})
export class DefautComponent implements OnInit { 
    getdata : any[] ;
    loading = false;


constructor(private route : ActivatedRoute, private router : Router,private defautService: DefautService){
}
 ngOnInit() {
    this.loading = true;
        this.defautService.getDefaultList()
          .subscribe(
          (response) => { this.getdata = response;
             console.log(this.getdata);
          },
          (error) => console.log("error : " + error)
            );
  
 }
 goAjoutdefaut(){
   this.router.navigate(['home/ajoutdefaut']);
 }
 delete(iddefaut:any){
   console.log(iddefaut);
   this.defautService.delete(iddefaut);
 }

}