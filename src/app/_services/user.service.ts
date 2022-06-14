import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateUser } from './guestcard-create';
import { PossibleFlights } from './possibleFlightInterface';
import { FlightData } from './flightsData';
import { CityData } from './city.interface';
import { PossibleFlightsData } from './possibleFlights';
import { City } from './city.model';

const API_URL = 'http://localhost:8080/api/user/';
const API_ADMIN = 'http://localhost:8080/api/admin/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<PossibleFlights[]> {
    return this.http.get<PossibleFlights[]>(API_URL + 'getAllPossibleFlights');
  }
  createPossibleFlight(possibleFlight:PossibleFlightsData):Observable<any>{
    return this.http.post(API_ADMIN+"newflight/", possibleFlight);
  }
  createCity(city:City): Observable<any>{
    return  this.http.post(API_ADMIN+"newcity/", city);
  }
  getAllCity(): Observable<CityData[]> {
    return this.http.get<CityData[]>(API_URL + 'getallcity');
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
