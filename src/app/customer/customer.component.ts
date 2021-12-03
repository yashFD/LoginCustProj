import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {

  searchterm: string = '';
  searchterm2: string = '';
  searchterm3: string = '';


searchForm = new FormGroup({
    searchBy: new FormControl(),
    searchType: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
})





  constructor() { }

  ngOnInit(): void {
    
  }

  

}
