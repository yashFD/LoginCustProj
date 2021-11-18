import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  d1: any;
  d2: any;
  d3: any;
  dynamicForm!: FormGroup;

  constructor(private service: DataService, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.dynamicForm = this._formBuilder.group({

    });

    // this.d1.forEach((item: any) => {
    //   this.dynamicForm.addControl(item.ElementName, this._formBuilder.control(null))
    // })

    this.fetchForm();
  }

  onSubmit() {
    console.log(this.dynamicForm.value);
    
  }


  // createElement() {
  //   this.d1.forEach((element: { ID: string; }) => {
  //     this.dynamicForm.addControl(element.ID, new FormControl(''));
  //   })
    
  // }

  createElement2() {
    this.d2.forEach((element: { ElementName: string; }) => {
      this.dynamicForm.addControl(element.ElementName, this._formBuilder.control(''));
    })
  }


 fetchForm() {
    this.service.getForm().subscribe(res =>{
      // console.log(res.Workspace.Body.Tasks[0]);
      console.log(res.Workspace.Body.Tasks[0].Task[0].Section[0].Row);
      console.log(res.Workspace.Body.Tasks[0].Task[1].Section[0].Row);
      console.log(res.Workspace.Body.Tasks[0].Task[2].Section[0].Row);
      this.d1 = res.Workspace.Body.Tasks[0].Task[0].Section[0].Row;
      this.d2 = res.Workspace.Body.Tasks[0].Task[1].Section[0].Row;
      this.d3 = res.Workspace.Body.Tasks[0].Task[2].Section[0].Row;
     this.createElement2();
    
  
    })
 }

}
