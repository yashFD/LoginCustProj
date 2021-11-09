import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [DataService]
})
export class LoginComponent implements OnInit {
  
  public loginForm!: FormGroup;
  

  constructor(private service: DataService, private lst: LocalStorageService, private route: Router,
    private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    })
  }

  // login() {
  //   this.service.getAuthToken(this.username, this.password).then(res =>{
  //     if(res) {
  //      this.lst.store('user',res);
  //      this.route.navigate(['main']);
  //     } else {
  //       alert('login failed')
  //     }
  //   })
  // }

  login() {
    this.service.getuser().subscribe(res =>{
      const user = res.find((a: any) =>{
        return a.userName === this.loginForm.value.username && a.password === this.loginForm.value.password
      });
      if (user){
        alert('login success')
        this.loginForm.reset();
        this.lst.store('user', user);
        this.route.navigate(['main']);
       
      } else {
        alert('user not found');
        this.loginForm.reset();
      }
    })
  }
}
