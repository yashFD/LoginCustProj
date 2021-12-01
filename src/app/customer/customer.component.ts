import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent implements OnInit {

  searchterm: string = '';
  searchterm2: string = '';
  searchterm3: string = '';

  constructor() { }

  ngOnInit(): void {
    
  }

  

}
