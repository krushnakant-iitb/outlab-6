import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../form.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})


export class FormComponent implements OnInit{

  feedbackForm= new FormGroup({
    name : new FormControl('', Validators.required),
    email : new FormControl('', Validators.required),
    feedback : new FormControl('',Validators.required),
    comment : new FormControl('',Validators.required)
  });
  
  title;

  constructor( private _formService : FormService ){
  }


  ngOnInit(){
    this._formService.getBeta()
      .subscribe(data => this.feedbackForm.setValue(data));
  }

  onSubmit(){
    this._formService.post(this.feedbackForm.value)
      .subscribe(
        response => this.correct(),
        error => this.error(error)
      );
  }

  correct(){
    alert("Dear "+this.feedbackForm.value.name + ", your form was submitted.");
    this.feedbackForm.reset();
  }

  error(error){
    alert("Dear "+this.feedbackForm.value.name + ", your form was not submitted. Try again.");
    console.log(error);
  }
}
