import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor(private lst: LocalStorageService) {}

  canActivate(): boolean {
    if (this.lst.retrieve('user')){
      return true;
    } else {
      alert('not logged in');
      return false;
    }
    
  }
  
}
