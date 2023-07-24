import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})

export class BrowseComponent  {
 
  MovieArray: any []=[];
  currentMovieID= ""  ;

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

 
  constructor (private http:HttpClient   ) {
    this.getAllMovies();
   }
   getAllMovies(){
    this.http.get('http://localhost:8000/movies/').subscribe((resultdata:any)=>{
     
      this.MovieArray = resultdata;
      console.log(this.MovieArray);
    } );
   }

   setUpdate(data:any){
    this.currentMovieID = data._id;
    this.title = data.title;
    this.year = data.year;
    this.rated = data.rated;
    this.runtime = data.runtime;
    this.genre = data.genre;
    this.director = data.director;
    this.production_company = data.production_company;
    this.cast = data.cast;
    this.plot = data.plot;
    this.posterlink = data.posterlink;
   }

   
   updateMovie(id:string) {
 
    let bodyData = {
      "title": this.title,
      "year": this.year,
      "rated": this.rated,
      "runtime": this.runtime,
      "genre": this.genre,
      "director": this.director,
      "production_company": this.production_company,
      
    };
    if (
      this.title == "" ||
      this.year == null ||
      this.rated == "" ||
      this.runtime == "" ||
      this.genre == "" ||
      this.director == "" ||
      this.production_company == "" 
      
    ) {
      this.errMsgUpdateMovie = "Please fill all the fields";
      console.log(this.errMsgUpdateMovie)
    } else {
      this.http
        .put("http://localhost:8000/movies/update/"+id, bodyData)
        .subscribe((resultdata: any) => {
          console.log(resultdata);
          if (resultdata.status) {
            this.passMsgUpdateMovie = "Movie updated successfully";
          }
        });
    }
  }
  
  deleteMovie(id:string) {
 
      return this.http.delete("http://localhost:8000/movies/delete/" + id).subscribe(result => console.log(result));
      
  }
}
