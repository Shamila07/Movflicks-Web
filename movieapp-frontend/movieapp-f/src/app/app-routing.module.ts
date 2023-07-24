import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/home page/homepage.component';
import { AddMoviesComponent } from './components/add-movies/add-movies.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowseComponent } from './components/browse/browse.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PreviewComponent } from './components/preview/preview.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component : HomepageComponent},
  { path: 'login', component : LoginComponent},
  { path: 'sidenav' ,  component : SidenavComponent},
  { path: 'header' ,  component : HeaderComponent},
  { path: 'add-movies', component : AddMoviesComponent },
  { path: 'explore', component : BrowseComponent },
  { path: 'contact-us', component : ContactUsComponent },
  { path: 'preview', component : PreviewComponent},
  { path: 'profile', component : ProfileComponent}
];

@NgModule({ 

  imports: [BrowserAnimationsModule], }) export class AppModule { }  

@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})

export class AppRoutingModule { }
