import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

  userForm=new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email:new FormControl(''),
    gender:new FormControl('')
  });

  formSubmitted(){
    console.log(this.userForm.value);
  }
}
