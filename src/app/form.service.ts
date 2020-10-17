import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { myform } from './form';



interface a_form{
  name: string,
  email: string,
  feedback: string,
  comment: string
}


@Injectable()
export class FormService {

  private URL='https://cs251-outlab-6.herokuapp.com/initial_values/';

  private other_url= 'https://cs251-outlab-6.herokuapp.com/add_new_feedback/';


  constructor(private http: HttpClient) { }

  getFormData(){
    return ({"name": "saurav", "email": "sauravgarg@cse.iitb.ac.in", "feedback": "Okay", "comment": "This field can be empty :)"});
  }

  getBeta(): Observable<myform>{
    return this.http.get<myform>(this.URL);
  }

  post(userData): Observable<myform>{
    return this.http.post<myform>(this.other_url, userData);
    //return ({"name": "saurav", "email": "sauravgarg@cse.iitb.ac.in", "feedback": "Okay", "comment": "This field can be empty :)"});

  }

}
