import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../../data.service';


@Component({
  selector: 'app-cust-data',
  templateUrl: './cust-data.component.html',
  styleUrls: ['./cust-data.component.css']
})

export class CustDataComponent implements OnInit, OnChanges {

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) marSort!: MatSort;

  displayedColumns = ['name', 'username', 'email'];
  dataSource!: MatTableDataSource<any>;
  searchSource!: any;

  constructor(private service: DataService) { }

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes.dataSearch && changes.dataSearch.currentValue) {
    //   const filterlist = this.sortCust(this.dataSearch);
    //   this.dataInit(filterlist);
    //   console.log(this.dataSearch)
    // }
       
    this.onSubmit();
    
  }

  dataInit(data: any) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.marSort;
  }


  ngOnInit(): void {
    this.service.getData().subscribe((res: any) => {
      this.dataInit(res);
      this.searchSource = res;
      // console.log(res);
      console.log(this.searchSource);
      
    })
  }



  @Input() FormSearch: any;

  onSubmit() {
    console.log(this.FormSearch.value);
  }

  // @Input() dataSearch: any;

  // get searchterm(): string {
  //   return this.dataSearch;
  // }

  // set searchterm(value: string) {
  //   console.log(this.dataSearch);
  //   this.dataSearch = value;
  //   this.dataSource = this.searchterm ? this.sortCust(this.searchterm) : this.dataSource;
  // }

  // sortCust(searchString: string) {
  //   return this.searchSource.filter(
  //     (filterCust: any) =>
  //       filterCust.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1 ||
  //       filterCust.username.toLowerCase().indexOf(searchString.toLowerCase()) !== -1 ||
  //       filterCust.email.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
  //   );
  // }


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

  //  public filter($event: any) {
  //   this.dataSource.filter = $event.target.value;
  // }




