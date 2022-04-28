import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { seance } from '../Modeles/seance';

@Injectable({
  providedIn: 'root'
})
export class SeanceService {

  host: string = "http://localhost:8090/api";

  constructor(private http: HttpClient) { }

  getSeance(id: number): Observable<any> {

    return this.http.get(`${this.host}/seance/${ id }`);
  }

  // getCoach(id : number): Observable<any> {

  //   return this.http.get(`${this.host}/coach/${ localStorage.getItem("idcoach") }`);
  // }

  getAllSeances(): Observable<any> {
    return this.http.get(`${this.host}/seance/Seances`);
  }

  createSeance(s: seance): Observable<Object> {
    return this.http.post(`${this.host}/seance/addSeance`, s);
  }

  updateSeance(s: seance): Observable<Object> {
    return this.http.put(`${this.host}/seance/updateSeance`, s);
  }

  deleteSeance(id: number): Observable<any> {
    return this.http.delete(`${this.host}/seance/delete/${id}`, { responseType: 'json' });
  }
}
