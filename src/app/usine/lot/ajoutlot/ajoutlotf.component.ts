import { Component, OnInit } from '@angular/core';
import { RouterModule,Router, ActivatedRoute} from '@angular/router';
import {LotService} from '../../service/lot.service';
@Component({
  selector: 'Ajoutlot',
  styleUrls:['./ajoutlot.component.css'],
  templateUrl:'./ajoutlot.component.html',
})
export class AjoutlotComponent implements OnInit { 
  model: any = {
    progression :"New"
    
  };
  getdata : any[] ;
  idcrise: number;
  private sub: any;

constructor(private route : ActivatedRoute,private lotService : LotService, private router : Router){}

 ngOnInit() {
 }
save(model:any){

      model.crise_idcrise = 31;
      this.lotService.save(model);
      this.router.navigate(['home/crise']);

}
  gohome() {
   this.router.navigate(['home']);
 }
 
}