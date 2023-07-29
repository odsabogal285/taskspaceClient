import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {HomeComponent} from "./components/home/home.component";
import {TaskListComponent} from "./components/task-list/task-list.component";

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path: 'home', component:HomeComponent, children:[
      {path: '', component:TaskListComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
