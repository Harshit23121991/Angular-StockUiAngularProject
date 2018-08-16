import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Details } from './app.component';
import { Http, Response } from '@angular/http';
import { UserInput } from './app.component';




@Injectable()
export class StockService {

 private API_URL= 'http://localhost:8302/api/stock-service/rest/stock/';
 private POST_API_URL= 'http://localhost:8302/api/db-service/rest/db/add';
 response :any;

   constructor(private http: HttpClient) { }

 public getStock(userName : string): Observable<Details[]>{
     console.log(this.API_URL +userName);
      return this.http.get(this.API_URL +userName);
                

/*     return this.http.get(this.API_URL +userName)
      .map((response:Response) => response.json())
                .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
*/

      /*let obs = this.http.get(this.API_URL +userName)
      .subscribe((response) =>{
          this.response = response;
          console.log(this.response);
      });*/
     // obs.subscribe((Response) => console.log(Response));
                        
  }

  public postStockInfo(details : any):Observable<Array<string>>{
      console.log(details);
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');
      return this.http.post(this.POST_API_URL,details);
  }

}