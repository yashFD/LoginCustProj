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
    // this.dynamicForm = this._formBuilder.group({

    // });

    // this.d1.forEach((item: any) => {
    //   this.dynamicForm.addControl(item.ElementName, this._formBuilder.control(null))
    // })

    this.fetchForm();
  }

  onSubmit() {
    console.log(this.dynamicForm.value);
  }


  createFormGroup(data: any): FormGroup {
    const formFields: any = {}; 
    for (let i of data) {
      for (let column of i.Column) {
        if (column.Format === 'select' || column.Format === 'input' || column.Format === 'Field' || column.Format === 'checkbox') {
          formFields[column.ElementId] = new FormControl()
        }
      }
    }
    console.log(formFields);
    return new FormGroup(formFields);
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

      const d1Formgroup = this.createFormGroup(this.d1);
      console.log(d1Formgroup.getRawValue());
      
     
    
  
    })
 }

}
