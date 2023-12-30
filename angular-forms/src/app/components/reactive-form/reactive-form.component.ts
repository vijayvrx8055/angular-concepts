import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

/***
 * 1. Import ReactiveFormsModule in our app.module.ts file
 * 2. Create Models
 * 3. Create Form
 * 4. Bind Form and Models
 */

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  constructor(private formBuilder: FormBuilder){}

  // using FormGroup manually
  userForm=new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email:new FormControl(''),
    gender:new FormControl('')
  });

  //using formbuilder for creating group
  loginForm = this.formBuilder.group({
    email:['sample@domain.com',
    [Validators.required,
      Validators.email]],
    password:['abc@1234'],
    interests:this.formBuilder.array([])
  })

  getInterests(): FormArray{
    return this.loginForm.get('interests') as FormArray;
  }
  
  createInterest(): FormGroup{
    return this.formBuilder.group({
      name:'',
      timeSpent:''
    })
  }

  addInterest(){
    this.getInterests().push(this.createInterest())
  }

  removeInterest(index:number){
    this.getInterests().removeAt(index);
  }
  

  formSubmitted(){
    console.log(this.userForm.value);
  }

  loginFormSubmitted(){
    console.log(this.loginForm.value);
  }
}
