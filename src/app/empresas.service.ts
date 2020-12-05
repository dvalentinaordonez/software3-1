import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { empresa } from './modelo/modelo.component';
@Injectable({
  providedIn: 'root'
})
export class EmpresasService {
  url='http://localhost/Archivoss/api/';
  constructor(private http: HttpClient) { }

  recuperarTodos() {
    return this.http.get(`${this.url}read.php`);
  }
  alta(empresa:any){
    return this.http.post(`${this.url}create.php`, JSON.stringify(empresa));
  }
  baja(codigo:number){
    return this.http.get(`${this.url}baja2.php?codigo=${codigo}`);

  }
  seleccionar(codigo:number){
    return this.http.get(`${this.url}seleccionar2.php?codigo=${codigo}`);
  }
  modificacion(empresa:any){
    return this.http.post(`${this.url}modificacion2.php`, JSON.stringify(empresa));
  }


consulta(empresa:any){
  return this.http.post(`${this.url}modificacion2.php`, JSON.stringify(empresa));
}
recuperarLogin() {
  return this.http.get(`${this.url}login.php`);
}
recuperarAdmin() {
  return this.http.get(`${this.url}admin.php`);
}

}