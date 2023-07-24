import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.css']
})
export class AddMoviesComponent implements OnInit {
 
  
    title: string ='';
    year: null =null;
    rated: string ='';
    runtime: string ='';
    genre: string ='';
    director: string ='';
    production_company: string ='';
    cast: string ='';
    plot: string ='';
    posterlink: string ='';
    errMsgaddMovie: string ='';
    passMsgaddMovie: string ='';
    errMsgUpdateMovie: string ='';
    passMsgUpdateMovie: string ='';
    errMsgDeleteMovie: string ='';
    passMsgDeleteMovie: string ='';


  constructor (private http:HttpClient, private router:Router  ) { }
  ngOnInit(): void {}

  addMovie() {
    let bodyData = { 
      "title" : this.title,
      "year" : this.year,
      "rated" : this.rated,
      "runtime" : this.runtime,
      "genre" : this.genre,
      "director" : this.director,
      "production_company" : this.production_company,
      "cast" : this.cast,
      "plot" : this.plot,
      "posterlink" : this.posterlink
  
};
if(this.title == "" || this.year == null || this.rated == "" || this.runtime == "" || this.genre == "" || this.director == "" || this.production_company == "" || this.cast == "" || this.plot == "" || this.posterlink == ""){
  this.errMsgaddMovie = "Please fill all the fields";
} else {
  this.http.post('http://localhost:8000/movies/add',bodyData).subscribe((resultdata:any)=>{
    console.log(resultdata);
    if(resultdata.status){
    this.passMsgaddMovie = ("Movie added successfully");
  } else{
    console.log(this.title);
    alert("Movie already exists");
  }
} );
  }
}




}
