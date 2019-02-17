import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, EmailValidator } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formGroup : FormGroup;
  constructor(private formBulid: FormBuilder) 
   {
     
   }

  ngOnInit() {
    this.formGroup = this.formBulid.group({
      firstName:this.formBulid.control(''),
      lastName:[''],
      EmAil:[''],
      Age:['']
    })
  }
  onSubmit(form: FormGroup){
    console.log(form);
    const {firstName,lastName,EmAil,Age} = form.value;
    const user = new User(firstName,lastName,EmAil,Age);
    console.log(User);
  }
}
