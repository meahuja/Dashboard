import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path : '', component : HomeComponent},
{path : 'corona/:statecode', component : ContentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
