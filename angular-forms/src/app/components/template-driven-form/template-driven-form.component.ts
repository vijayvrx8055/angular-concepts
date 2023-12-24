import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../model/User';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {
submitted=false;
user:User={firstName:'',lastName:'',email:'',gender:''};
  formSubmitted(userForm: NgForm){
    this.submitted=true;
    this.user.firstName=userForm.form.controls['firstName'].value;
    this.user.lastName=userForm.form.controls['lastName'].value;
    this.user.email=userForm.form.controls['email'].value;
    this.user.gender=userForm.form.controls['gender'].value;
    console.log('User:',this.user);
  }

}
