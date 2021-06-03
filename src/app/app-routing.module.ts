import { RouteGuardService } from './services/route-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  {path:'', component : LoginComponent},
  {path:'index', component : LoginComponent},
  {path:'login', component : LoginComponent},
  {path:'welcome/:userid', component : WelcomeComponent},
  {path:'logout', component : LogoutComponent},
  {path:'**', component : ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
