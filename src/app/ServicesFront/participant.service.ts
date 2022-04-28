import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { participant } from '../Modeles/Participant';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  host: string = "http://localhost:8090/api";

  constructor(private http: HttpClient) { }

  getParticipant(id: number): Observable<any> {
    return this.http.get(`${this.host}/participant/${id}`);
  }

  getAllParticipants(): Observable<any> {
    return this.http.get(`${this.host}/coach/coachs`);
  }

  createParticipant(p: participant): Observable<Object> {
    return this.http.post(`${this.host}/participant/addParticipant`, p);
  }

  updateParticipant(p: participant): Observable<Object> {
    return this.http.put(`${this.host}/participant/updateParticipant`, p);
  }

  deleteParticipant(id: number): Observable<any> {
    return this.http.delete(`${this.host}/participant/delete/${id}`, { responseType: 'json' });
  }
}
