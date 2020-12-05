import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmpresasComponent } from './components/list-empresas/list-empresas.component';
import { DetailsEmpresasComponent } from './components/details-empresas/details-empresas.component';
import { AddEmpresasComponent } from './components/add-empresas/add-empresas.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'empresa', component: ListEmpresasComponent },
  { path: 'login', component: LoginComponent },
  { path: 'empresa/:id', component: DetailsEmpresasComponent },
  { path: 'add', component: AddEmpresasComponent },
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
