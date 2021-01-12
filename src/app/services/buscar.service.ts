import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class BuscarService {

  constructor(private http: HttpClient) { }
  get token(): string {
    return localStorage.getItem('token') || '';
  }
  get headers(){
    return{
      headers:{
        'x-token': this.token
      }
    }
  }
  buscando(todo: 'usuarios'|'medicos'|'hospitales',
termino:string  ){
    const url = `${base_url}/todo/coleccion/${todo}/${termino}`;
    return this.http.get<any[]>(url, this.headers).pipe(map(
      (resp:any) => resp.resultados));
  }
}
