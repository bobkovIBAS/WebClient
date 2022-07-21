import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { FlightComponent } from './flights/flights.component';
import { BoardAdminCityComponent } from './board-admin-city/boad-admin-city.component';
import { AuthGuard } from './_services/auth.active';
import { BoardAdminFlight } from './board-admin-flight/board-admin-flight.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'myflights', component: FlightComponent, canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate:[AuthGuard] },
  { path: 'user', component: BoardUserComponent, canActivate:[AuthGuard] },
  { path: 'mod', component: BoardModeratorComponent, canActivate:[AuthGuard] },
  { path: 'adminflight', component: BoardAdminComponent, canActivate:[AuthGuard] },
  { path: 'admincity', component: BoardAdminCityComponent, canActivate:[AuthGuard] },
  { path: 'allflight', component: BoardAdminFlight, canActivate:[AuthGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
