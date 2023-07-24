import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
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
