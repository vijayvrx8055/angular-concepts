import { Component, OnInit } from '@angular/core';
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
export class ReactiveFormComponent implements OnInit {


  dynamicFriend = '';
  friendList = [{ id: 1, name: 'Vijay' },
  { id: 2, name: 'Ajay' },
  { id: 3, name: 'Ashok' },
  { id: 4, name: 'Bini' }];


  // using FormGroup manually
  //user form
  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    gender: new FormControl('')
  });

  //using formbuilder for creating group
  //login form model
  loginForm = this.formBuilder.group({
    email: ['sample@domain.com',
      [Validators.required,
      Validators.email]],
    password: ['abc@1234'],
    interests: this.formBuilder.array([])
  })

  // friend List model
  friendsListModel = this.formBuilder.group({
    friends: [],
  })
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    console.log('component initialized');
    //valueChanges
    this.loginForm.get('email')?.valueChanges.subscribe(value => {
      console.log('new value is: ' + value);
    })
    this.loginForm.get('email')?.statusChanges.subscribe(status => {
      console.log('Valid:' + status);
    })
  }

  //------------------------------------------------------------------
  getInterests(): FormArray {
    return this.loginForm.get('interests') as FormArray;
  }

  createInterest(): FormGroup {
    return this.formBuilder.group({
      name: '',
      timeSpent: ''
    })
  }

  addInterest() {
    this.getInterests().push(this.createInterest())
  }

  removeInterest(index: number) {
    this.getInterests().removeAt(index);
  }
  //-----------------------------------------------------------

  formSubmitted() {
    console.log(this.userForm.value);
  }

  loginFormSubmitted() {
    console.log(this.loginForm.value);
  }

  friendSubmitted() {
    console.log('Result:', this.friendsListModel.value);
  }
  addFriendToList() {
    console.log('friend:', this.dynamicFriend);
    this.friendList.push({
      id: Number((Math.random() * 100).toFixed(0)),
      name: this.dynamicFriend
    });
  }
}
