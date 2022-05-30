import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateUser } from './guestcard-create';
import { PossibleFlights } from './possibleFlights';
import { FlightData } from './flightsData';

const API_URL = 'http://localhost:8080/methods/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<PossibleFlights[]> {
    return this.http.get<PossibleFlights[]>(API_URL + 'getAllPossibleFlights');
  }

  saveFlightData(id:string,user:CreateUser): Observable<any>{
    return  this.http.post(API_URL+"registration/"+id, user);
  }

  deletedBookedFlightId(id:string) {
    return this.http.delete(API_URL+"deleteBookedFlight/"+id);
  }

  getFlightData(): Observable<FlightData[]>{
    return this.http.get<FlightData[]>(API_URL + 'getAllFlights');
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}
