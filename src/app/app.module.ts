import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { AddEmpresasComponent } from './components/add-empresas/add-empresas.component';
import { ListEmpresasComponent } from './components/list-empresas/list-empresas.component';
import { DetailsEmpresasComponent } from './components/details-empresas/details-empresas.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule } from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule, SimpleSnackBar} from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';




@NgModule({
  declarations: [
    AppComponent,
    AddEmpresasComponent,
    ListEmpresasComponent,
    DetailsEmpresasComponent,
    LoginComponent,
    AdminComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    
    FormsModule,
    MatTableModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    HttpClientModule,
    MatSliderModule,
    NgbModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
