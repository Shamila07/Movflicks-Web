import { Component,OnInit, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';



@Component({
  selector: 'app-preview-movie',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent { 
  
  genres: any[] = [];

  constructor(private http: HttpClient) {}

  }
  
  

