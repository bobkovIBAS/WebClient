import { Component, OnInit } from "@angular/core";
import { City } from "../_services/city.model";
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
      this.userService.createCity(new City(this.cityForm.cityName,parseInt(this.cityForm.cityRegion))).subscribe(
        (data: any) => {
          this.cityForm = "";
          alert("создано");
          
        },
        error => console.log(error)
    );
    }

  }