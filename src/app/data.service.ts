import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  url = "http://localhost:3000/user";
  url2 = "https://jsonplaceholder.typicode.com/users";


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

authuser() {
  return localStorage.getItem('user');
}



}
