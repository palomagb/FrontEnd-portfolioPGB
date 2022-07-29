import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
 
 
  url: string = "https://portfolio-palomagareisborgiani.herokuapp.com/api";
  
  
  constructor(private http: HttpClient) {}

  getById(id: number): Observable<any> {
	  return this.http.get(this.url + `/laboral/${id}`);
	}
  getAll(): Observable<any> {
    console.log("pasa por getAll?")
	  return this.http.get(this.url+'/laboral');
	}
  //terminar en algun momento
  update(id: number, experiencia: any): Observable<any>{
    return this.http.put(this.url + `/laboral/${id}`, experiencia);
  }

  //terminar en algun momento
  delete(id: number): Observable<any>{
    return this.http.delete(this.url + `/laboral/${id}`);
  }
 save(experiencia:any) : Observable<any>{
   return this.http.post(this.url + `/laboral/`, experiencia);
 }
 
}
