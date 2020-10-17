import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent {

  feedbackForm= new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    feedback : new FormControl(),
    comments : new FormControl('')
  });


}
