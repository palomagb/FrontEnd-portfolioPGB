import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PagErrorComponent } from './components/pag-error/pag-error.component';

const routes: Routes = [
  {path: '', component:HomeComponent },
  {path: 'login', component:IniciarSesionComponent },
  {path: 'home', component:HomeComponent },
  {path:'**', component: PagErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
