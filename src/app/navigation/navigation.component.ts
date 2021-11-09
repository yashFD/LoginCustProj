import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private route: Router, private lst: LocalStorageService) { }

  ngOnInit(): void {
  }


  logout() {
     this.lst.clear('user');
     this.route.navigate(['login']);
  }
}
