import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class CriseService {
    constructor(private http: Http) { }

    getCriseListByUsine(idusine:number): Observable<any> {

    return this.http.get('http://localhost:8080/GestionCrise/rest/crise/byUsine/'+idusine)
        //.map((response:Response) => response.json())
          .map((res : Response) => res.json())
       
    }
    delete(idcrise:number){
        return this.http.delete('http://localhost:8080/GestionCrise/rest/crise/byid/'+idcrise)
        .subscribe((ok)=>{console.log(ok)});
    }
    save(crise:any){
        console.log(crise);
        return this.http.post('http://localhost:8080/GestionCrise/rest/crise/savecrise', crise)
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

