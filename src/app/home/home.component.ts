import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { CreateFlight } from '../_services/createFlightData';
import { GuestCard } from '../_services/guestCard';

import { CreateUser } from '../_services/guestcard-create';
import { PossibleFlights } from '../_services/possibleFlightInterface';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class HomeComponent implements OnInit {
  public flightData: PossibleFlights[];
  public saveLocal: CreateUser[];
  public guestCard: GuestCard[];
  public saveflightData: PossibleFlights;
  public createFlight: CreateFlight;
  content?: string;
  showRegistartionFlight= false;
  showRegistartionFlightDone=false;
  showRegistartionFlightGuestCard=false;
  showStaticText=true;
  selected={id:'',};

  loginForm: CreateUser = {
    name: '',
    surname: '',
    passport:''
  }


  constructor(private userService: UserService,
    private authService: AuthService, 
    private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe((data:PossibleFlights[])=>{
      this.flightData = data;
    },
    err => {
      this.content = JSON.parse(err.error).message;
    });

    this.userService.getGuestCardAll().subscribe((data:GuestCard[])=>{
      this.guestCard = data;
    },
    err => {
      this.content = JSON.parse(err.error).message;
    });
  }

  selectFligth(): void{
    if(this.selected.id.length>0){
      if(this.guestCard!=null){
        this.showStaticText=false;
        this.showRegistartionFlightGuestCard=true;
      } else{
        this.showRegistartionFlight = true;
        this.showStaticText=false;
      }
      
    }
  }
  
  onCheckChange(event){
    if(event.target.checked){
      this.selected.id=event.target.value;
    }
  }

  addNewPassengers(){
    if(this.showRegistartionFlight == false){
      this.showRegistartionFlight=true;
      this.showRegistartionFlightGuestCard=false;
    } else{
      this.showRegistartionFlight=false;
      this.showRegistartionFlightGuestCard=true;
    }
  }

  createFlightData():void{
    if(this.tokenStorage.getToken()!=null){
      this.userService.saveFlightData(this.selected.id,
        this.loginForm,this.flightData.find(i=>i.id==this.selected.id).dateFlight).subscribe(
        (data: CreateFlight) => {
          this.showRegistartionFlight=false;
          this.showRegistartionFlightDone = true;
          this.showStaticText=false;
          
        },
        error => console.log(error));
    } else{
      this.router.navigate(['login']);
    }

  } 
  createFlightDataWithGuestCard(id:string){
    if(this.tokenStorage.getToken()!=null){
      this.userService.saveFlightDataNew(this.selected.id,
        this.guestCard.find(i=>i.id==id),
        this.flightData.find(i=>i.id==this.selected.id).dateFlight).subscribe(
        (data: any) => {
          this.showRegistartionFlight=false;
          this.showRegistartionFlightDone = true;
          this.showRegistartionFlightGuestCard=false;
          this.showStaticText=false;
          this.createFlight = data;
        },
        error => console.log(error));
    } else{
      this.router.navigate(['login']);
    }

  } 
  
}
