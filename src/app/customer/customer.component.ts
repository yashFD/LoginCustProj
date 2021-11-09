import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../data.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) marSort!: MatSort;

  displayedColumns = ['name','username','email'];
  dataSource! : MatTableDataSource<any>;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.service.getData().subscribe((res: any) =>{
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.marSort;
      console.log(res);
    })
  }

  filtercust($event: any) {
    this.dataSource.filter = $event.target.value;
  }

}
