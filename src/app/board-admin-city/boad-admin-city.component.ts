import { Component, OnInit } from "@angular/core";
import { City } from "../_services/city.model";
import { UserService } from "../_services/user.service";

@Component({
    selector: 'app-boad-city',
    templateUrl: './boad-admin-city.component.html',
    styleUrls: ['./boad-admin-city.component.css']
  })
  export class BoardAdminCityComponent implements OnInit {
    public city: City;
    cityForm:any={
        cityRegion:null,
        cityName: null
      };

    constructor(private userService: UserService) { }  
    ngOnInit(): void {
       
    }

    createCity(): void{
      if(this.cityForm.cityName!="" && this.cityForm.cityRegion!=""){
          this.userService.createCity(new City(this.cityForm.cityName,parseInt(this.cityForm.cityRegion))).subscribe(
            (data: any) => {
              alert("создано");
            },
            error => console.log(error)
        );
      }
    }

  }