import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  url: string = "https://comunidad-apirest.herokuapp.com/api";
  
  
  
  constructor(private http: HttpClient) {}

  getById(id: number): Observable<any> {
	  return this.http.get(this.url + `/proyectos/${id}`);
	}
  getAll(): Observable<any> {
    console.log("pasa por getAll?")
	  return this.http.get(this.url+'/proyectos');
	}
  //terminar en algun momento
  update(id: number, proyecto: any): Observable<any>{
    return this.http.put(this.url + `/proyectos/${id}`, proyecto);
  }

  //terminar en algun momento
  delete(id: number): Observable<any>{
    return this.http.delete(this.url + `/proyectos/${id}`);
  }
 save(proyecto:any) : Observable<any>{
   return this.http.post(this.url + `/proyectos/`, proyecto);
 }
}
