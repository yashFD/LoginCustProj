import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, ValidatorFn, Validators } from '@angular/forms';
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

  
  // pageStructure: any;
  // choiceLists: any;
  // eachSectionArr: any;
  // dataPopulate: any;
  // form: any;
  // arrNew: any;

  constructor(private service: DataService, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // this.dynamicForm = this._formBuilder.group({

    // });

    // this.d1.forEach((item: any) => {
    //   this.dynamicForm.addControl(item.ElementName, this._formBuilder.control(null))
    // })

    this.fetchForm();
  }

  onSubmit(dynamicForm:any) {
    console.log(dynamicForm.controls);
    
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
    })
 }


}

// fetchForm2() {
//   this.service.getForm().subscribe(res => {
//     this.pageStructure = res;
//     this.pageStructure.Data.Group.forEach((group: any) => {
//      if (group.Name !== undefined && group.ITEM !== undefined) {
//       this.choiceLists[group.Name] = group.ITEM;
//      }
//     });
//     console.log('Choice List: ', this.choiceLists);
//     this.eachSectionArr = res.Workspace.Body.Tasks[0].Task;
//     var t = 0;
//     let dataArray: never[] = [];
//      res.Data.Group.forEach((element: { Name: string; ITEM: { customer: never[]; }[]; }) => {
//       if(element.Name == "customer"){
//        dataArray = element.ITEM[0].customer;
//        }
//      });
//     for(const eachsection of this.eachSectionArr){
//      for(const col of eachsection.Section[0].Row){
//       for(const eachcol of col.Column ){
//        if(eachcol.type !="Blank" && eachcol.Format != "Blank" && eachcol.Format != undefined){
//         console.log("get validators",this.getValidator(eachcol));
//         this.dataPopulate = this.getDataforField(dataArray, eachcol.Name);
//         this.form.addControl(eachcol.Name, new FormControl(this.dataPopulate,this.getValidator(eachcol))); // Add a new control to your form
//        }
//       }
//      }
//     }
//     })
// }
  

//   prepareChoiceLists() {
//     if (this.pageStructure !== undefined) {
//       this.pageStructure.Data.Group.forEach((group: any) => {
//        if (group.Name !== undefined && group.ITEM !== undefined) {
//         this.choiceLists[group.Name] = group.ITEM;
//        }
//       });
//       console.log('Choice List: ', this.choiceLists);
//       } else {
//       console.log('Error: prepareChoiceLists - pageStructure undefined');
//       }
//    }

//    onSubmit(): void {
  
//     console.log(this.form.invalid);
//     if(this.form.valid){
//     let frmvalue = this.form.value;
//     console.log(JSON.stringify(frmvalue));
//     let postVerifyApplicantArr =[];
//      for(var k in frmvalue){
//       postVerifyApplicantArr.push({
//        uuid: '52c77579-74ab-4497-b1c4-f6be1c3ba428',
//        action: 'add/update/delete',
//        fieldname:k ,
//        fieldvalue:frmvalue[k]    
//       });  
//      }
//      console.log("postvar array", JSON.stringify(postVerifyApplicantArr));
    
//     }
//    }

//    private getValidator(formField: any): ValidatorFn {
//     //console.log(formField.Format+"---->"+formField.Value);
//     switch(formField.Value) {
//      case "email":
//       return Validators.email;
//      case "required":
//       return Validators.required;
//      case "ZIP":
//       return Validators.required;
//      case "Number":
//       return Validators.pattern('[- +()0-9]+');
//      default:
//       return formField;
//     }
//    }
//     getDataforField(obj: never[], datakey: string) {
//      for (let key in obj) {
//        // checking if it's nested
//        if (obj.hasOwnProperty(key) && (typeof obj[key] === "object")) {
//          this.getDataforField(obj[key],datakey)
//        } else {
//          if(key == datakey){
//           this.arrNew = obj[key];
//           break;
//          }
//        }
//      }
//      return this.arrNew;
//     }



