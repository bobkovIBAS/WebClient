import { Component, Injectable, OnInit } from "@angular/core";
import { FlightData } from "../_services/flightsData";
import { UserService } from "../_services/user.service";



@Component({
    selector: 'app-board-admin-flight',
    templateUrl: './board-admin-flight.component.html',
    styleUrls: ['./board-admin-flight.component.css']
  })

  @Injectable({
    providedIn: 'root'
  })
  export class BoardAdminFlight implements OnInit {
    content?: string;
    public flightData:FlightData[];
    selected={id:'',};
  
    constructor(private userService: UserService) { }
  
    ngOnInit(): void {
      this.userService.getAllFlightDataAdmin().subscribe(
        (data: FlightData[]) => {
          this.flightData = data;
        },
        error => console.log(error)
    );
    }

    onCheckChange(event){
      if(event.target.checked){
        this.selected.id=event.target.value;
      }
    }

    selectFligth(){
      this.userService.deletedBookedFlightAdmin(this.selected.id).subscribe(
        (data: any) => {
          this.ngOnInit();
        },
        error => console.log(error)
    );
      }
  }
  