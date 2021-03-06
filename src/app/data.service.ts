import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  url = "./assets/loginData.json";
  url2 = "https://jsonplaceholder.typicode.com/users";
  url3 = './assets/formData.json';


// getAuthToken(userName: any, password: any)  {
//     return this._http.post('http://localhost:3000/user', {"userName": userName, "password":password})
//     .toPromise()
//     .then(function (res: any){
//       return res
//     }).catch( (err) => {
//       console.log(err);
//     }

//     )
// }
 
getuser() {
  return this._http.get<any>(this.url);

}

getData() {
  return this._http.get(this.url2);
}

getForm() {
  return this._http.get<any>(this.url3).pipe(
    map((res: any)=> {
      return res;
    })
  )
}

authuser() {
  return localStorage.getItem('user');
}



}
