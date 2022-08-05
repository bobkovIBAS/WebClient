import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateUser } from './guestcard-create';
import { PossibleFlights } from './possibleFlightInterface';
import { FlightData } from './flightsData';
import { CityData } from './city';
import { PossibleFlightsData } from './possibleFlights';
import { City } from './city.model';
import { TokenStorageService } from './token-storage.service';
import { GuestCard } from './guestCard';
import { CreateFlight } from './createFlightData';

const API_URL = 'http://localhost:8080/api/user/';
const API_ADMIN = 'http://localhost:8080/api/admin/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient,private tokenStorageService: TokenStorageService) { }

  getPublicContent(): Observable<PossibleFlights[]> {
    return this.http.get<PossibleFlights[]>(API_URL + 'getAllPossibleFlights');
  }
  createPossibleFlight(possibleFlight:PossibleFlightsData):Observable<any>{
    return this.http.post(API_ADMIN+"newflight/", possibleFlight);
  }
  createCity(city:City):Observable<any>{
    return this.http.post(API_ADMIN+"newcity/", city);
  }
  deletedBookedFlightAdmin(id:string) {
    return this.http.delete(API_ADMIN+"deleteguestflight/"+id);
  }
  getAllFlightDataAdmin(): Observable<FlightData[]>{
    return this.http.get<FlightData[]>(API_ADMIN + 'getallflightdata');
  }
  getAllCity(): Observable<CityData[]> {
    return this.http.get<CityData[]>(API_URL + 'getallcity');
  }
  saveFlightData(id:string,user:CreateUser, date:String): Observable<CreateFlight>{
    return  this.http.post<CreateFlight>(API_URL+"registrationwithguestcard/"+id+"/"+this.tokenStorageService.getUser().id+"/"+date, user);
  }

  saveFlightDataNew(id:string, guestCard:GuestCard, date:String): Observable<CreateFlight>{
    return  this.http.post<CreateFlight>(API_URL+"registration/"+id+"/"+this.tokenStorageService.getUser().id+"/"+date,guestCard);
  }
  getGuestCard(): Observable<GuestCard>{
    return this.http.get<GuestCard>(API_URL + "getGuestCard/"+this.tokenStorageService.getUser().id);
  }
  
  getGuestCardAll(): Observable<GuestCard[]>{
    return this.http.get<GuestCard[]>(API_URL + "getGuestCard/"+this.tokenStorageService.getUser().id);
  }

  deletedBookedFlightId(id:string) {
    return this.http.delete(API_URL+"deleteBookedFlight/"+id);
  }

  getFlightData(): Observable<FlightData[]>{
    return this.http.get<FlightData[]>(API_URL + "getflight/"+this.tokenStorageService.getUser().id);
  }

  getFlightDataWith(guestCard:GuestCard ): Observable<FlightData[]>{
    return this.http.put<FlightData[]>(API_URL + "getflight/"+this.tokenStorageService.getUser().id,guestCard);
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
