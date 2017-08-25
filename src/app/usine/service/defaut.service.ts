import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class DefautService {
    
    constructor(private http: Http) { }

    getDefaultList(): Observable<any> {

    return this.http.get('http://localhost:8080/GestionCrise/rest/defaut/byLot')
        //.map((response:Response) => response.json())
          .map((res : Response) => res.json())
       
    }
   
    
    
}

