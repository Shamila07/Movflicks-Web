import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sideBarOpen = true;
  starRating = 0;
  
  

@Output() toggleSidebarForMe: EventEmitter<any> =  new EventEmitter();

  constructor () { }

  ngOnInit(): void {
  }
  toggleSidebar(){
    this.toggleSidebarForMe.emit();
  }
  
  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

}
