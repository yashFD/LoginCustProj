import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../../data.service';



@Component({
  selector: 'app-cust-data',
  templateUrl: './cust-data.component.html',
  styleUrls: ['./cust-data.component.css']
})
export class CustDataComponent implements OnInit {


  filterd: any;
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

  // public filter(term: string = "") {
  //   term = term.trim(); // remove empty space 
  //   if (term) { // if the user send an empty string like spaces
  //     this.filterd = this.service.getData().pipe(
  //       filter((v: string) => (v || '').includes(term))).subscribe();
  //   } else { // reset 
  //     this.filterd = this.list;
  //   }
  // }

   public filter($event: any) {
    this.dataSource.filter = $event.target.value;
  }

}

