import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormService } from '../form.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})


export class FormComponent implements OnInit{

  feedbackForm= new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    feedback : new FormControl(),
    comment : new FormControl('')
  });
  
  title;

  constructor( private _formService : FormService ){
  }


  ngOnInit(){
    //this.feedbackForm.patchValue(this._formService.getFormData());
    //this._formService.getBeta()
    //.subscribe(data => this.feedbackForm.setValue(data))
    this._formService.getBeta()
      .subscribe(data => this.feedbackForm.setValue(data));
  }

}
