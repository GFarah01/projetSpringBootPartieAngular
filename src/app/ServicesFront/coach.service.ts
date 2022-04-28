import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { coach } from '../Modeles/Coach';

@Injectable({
  providedIn: 'root'
})
export class CoachService {

  host: string = "http://localhost:8090/api";

  constructor(private http: HttpClient) { }

  getCoach(id: number): Observable<any> {

    return this.http.get(`${this.host}/coach/${ id }`);
  }

  // getCoach(id : number): Observable<any> {

  //   return this.http.get(`${this.host}/coach/${ localStorage.getItem("idcoach") }`);
  // }

  getAllCoachs(): Observable<any> {
    return this.http.get(`${this.host}/coach/coachs`);
  }

  createCoach(c: coach): Observable<Object> {
    return this.http.post(`${this.host}/coach/addCoach`, c);
  }

  updateCoach(c: coach): Observable<Object> {
    return this.http.put(`${this.host}/coach/updateCoach`, c);
  }

  deleteCoach(id: number): Observable<any> {
    return this.http.delete(`${this.host}/coach/delete/${id}`, { responseType: 'json' });
  }

}
