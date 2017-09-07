import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class UsineService {
    
    constructor(private http: Http) { }

   
    getUsine(idusine : number){
        return this.http.get('http://localhost:8080/GestionCrise/rest/usine/'+idusine)
        .map((res : Response) => res.json())
    }
   
 

   
    
    
}

