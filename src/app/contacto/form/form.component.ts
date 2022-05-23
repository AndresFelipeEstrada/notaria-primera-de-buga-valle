import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  
  constructor(private formBuilder: FormBuilder) { }

  submitted = false
  registerForm = this.formBuilder.group(
    {
      name: ['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      subject:['', Validators.required,],
      message:['', Validators.required]
    }
  )
  ngOnInit(): void {
  }

 get form(){
   return this.registerForm.controls
 }

 submit(){
   this.submitted = true
   if (this.registerForm.invalid){
    return 
  }

  console.log(this.registerForm.value);
  
 }

 onReset() {
   this.submitted = false
   this.registerForm.reset()
 }
  
}
