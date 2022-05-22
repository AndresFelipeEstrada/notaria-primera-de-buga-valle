import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  registerForm: FormGroup
  submitted = false
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        name: ["", Validators.required],
        email:["", [Validators.required, Validators.email]],
        subject:["", Validators.required,],
        message:["", Validators.required]
      }
    )
  }

 get form(){
   return this.registerForm.controls
 }

 onSubmit(){
   this.submitted = true

   if (this.registerForm.invalid){
    return
  }
  alert(
  "SUCCESS" + JSON.stringify(this.registerForm.value, null,4)
  )

 }

 onReset() {
   this.submitted = false
   this.registerForm.reset()
 }

 

  
  
}
