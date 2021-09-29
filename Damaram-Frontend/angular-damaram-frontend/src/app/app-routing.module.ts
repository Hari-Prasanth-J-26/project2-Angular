import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RequirementformComponent } from './requirementform/requirementform.component';
import { ServicesComponent } from './services/services.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UsersComponent } from './users/users.component';
import { ViewUsersComponent } from './view-users/view-users.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'login', component: LoginComponent}, 
  {path:'userhome', component: UserhomeComponent},
  {path:'home', component: HomeComponent},
  {path:'services', component: ServicesComponent},
  {path:'adminhome', component: AdminhomeComponent},
  {path:'users', component: UsersComponent},
  {path:'viewusers', component: ViewUsersComponent},
  {path:'deleteuser', component: DeleteUserComponent},
  {path:'requirementform', component: RequirementformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
