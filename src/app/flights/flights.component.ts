import { Component, Injectable, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { timer } from "rxjs/internal/observable/timer";
import { FlightData } from "../_services/flightsData";
import { GuestCard } from "../_services/guestCard";
import { UserService } from "../_services/user.service";

@Component({
    selector: 'app-flight-data',
    templateUrl: './flights.component.html',
    styleUrls: ['./flights.component.css']
  })
  
  @Injectable({
    providedIn: 'root'
  })
  export class FlightComponent implements OnInit{
    public flightDataDao: FlightData[];
    public guestCard:GuestCard[];
    selected={id:'',};
    activeMessage=false;
    constructor(private userService: UserService, private router: Router) { }

    ngOnInit(): void {
      this.userService.getGuestCardAll().subscribe((data:GuestCard[])=>{
        this.guestCard = data;
      },
      err => {
        console.log(JSON.parse(err.error).message);
      });
    }

    onCheckChange(event){
      if(event.target.checked){
        this.selected.id=event.target.value;
      }
    }

    flightDataWithGuestCard(id:string){
      this.userService.getFlightDataWith(this.guestCard.find(i=>i.id==id)).subscribe((data:FlightData[])=>{
        this.flightDataDao = data;
      },
      err => {
        console.log(JSON.parse(err.error).message);
      });
    }

    selectFligth(){
      this.userService.deletedBookedFlightId(this.selected.id).subscribe(
        (data: any) => {
          this.activeMessage=true;
          this.ngOnInit();
        },
        error => console.log(error)
    );
      }
      
  } 