import { Component, OnInit } from "@angular/core";
import { UserService } from "../_services/user.service";

@Component({
    selector: 'app-boad-city',
    templateUrl: './boad-admin-city.component.html',
    styleUrls: ['./boad-admin-city.component.css']
  })
  export class BoardAdminCityComponent implements OnInit {

    cityForm:any={
        cityRegion:null,
        cityName: null
      };

    constructor(private userService: UserService) { }  
    ngOnInit(): void {
       
    }

    createCity(): void{
        
    }

  }