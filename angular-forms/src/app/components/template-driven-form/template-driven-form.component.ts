import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../model/User';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent implements OnInit{

submitted=false;

@ViewChild('userForm') userForm : NgForm | undefined;
user:User={firstName:'',lastName:'',email:'',gender:''};

  ngOnInit(): void {
   setTimeout(()=>{
    this.user.firstName="Firstname";
    this.user.lastName="Lastname";
    this.user.email="Sample@domain.com";
    this.user.gender="male";
    this.userForm?.setValue(this.user);
   }); 
  }


  formSubmitted(userForm: NgForm){
    this.submitted=true;
    this.user.firstName=userForm.form.controls['firstName'].value;
    this.user.lastName=userForm.form.controls['lastName'].value;
    this.user.email=userForm.form.controls['email'].value;
    this.user.gender=userForm.form.controls['gender'].value;
    console.log('User:',this.user);
  }

}
