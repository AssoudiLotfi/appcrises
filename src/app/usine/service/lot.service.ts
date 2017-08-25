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
   
    
    
}

