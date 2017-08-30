import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class LotService {
    
    constructor(private http: Http) { }

    getListLot(): Observable<any> {

    return this.http.get('http://localhost:8080/GestionCrise/rest/Lot/byCrise')
        //.map((response:Response) => response.json())
          .map((res : Response) => res.json())
       
    }
    

    getLotByIdCrise(idcrise : number){
        return this.http.get('http://localhost:8080/GestionCrise/rest/Lot/ByIdCrise/'+idcrise)
        .map((res : Response) => res.json())
    }
    save(lot:any){
        console.log(lot);
        return this.http.post('http://localhost:8080/GestionCrise/rest/Lot/savelot', lot)
        .subscribe(
            // Successful responses call the first callback.
            (data:any) => {console.log(data)},
            // Errors will call this callback instead:
            (err: any) => {
            console.log('Something went wrong!', err);
            }
        );

    }

   
    
    
}

