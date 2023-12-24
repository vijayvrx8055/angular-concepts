import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {
submitted=false;
  formSubmitted(userForm: NgForm){
    this.submitted=true;
    console.log(userForm);
  }

  clear(){
    this.submitted=false;
  }
}
