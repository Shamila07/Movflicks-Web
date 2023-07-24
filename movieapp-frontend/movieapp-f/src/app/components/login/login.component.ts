import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  id: string = '';
  errMsgLogin: string = '';
  passMsgLogin: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    
  }


  addUser() {
    let bodyData = {
      id : this.id,
      "username" : this.username,
      "password" : this.password,
  };
  if(this.username == "" || this.password == ""){
    this.errMsgLogin = "Please fill all the fields";
  } else {

}
}
}