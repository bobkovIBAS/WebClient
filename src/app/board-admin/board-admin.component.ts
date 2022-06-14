import { Component, OnInit } from '@angular/core';
import { CityData } from '../_services/city.interface';
import { PossibleFlightDate } from '../_services/possibleFlightDate';
import { PossibleFlightsData } from '../_services/possibleFlights';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  public flightData: PossibleFlightsData;
  public cityFrom:CityData[];
  public cityTo:CityData[];
  public possibleFlightDateSave: PossibleFlightDate[]=[];
  showAnyFlightParams=false;
  disabledData=null;

  req = [
    { name: 'Понедельник', week:1 }
    ,{ name: 'Вторник', week:2 }
    ,{ name: 'Среда', week:3 }
    ,{ name: 'Четверг', week:4 }
    ,{ name: 'Пятница', week:5 }
    ,{ name: 'Суббота', week:6 }
    ,{ name: 'Воскресенье', week:0 }
];
  cityToValue='';

  cityFromValue='';

  possibleFlightForm:any = {
    planeTypes: null,
    freePlaces: null,
    dateFlights:null,
    sumTicket:null
  };

  possibleFlightDate:any={
    planeTypes:null,
    freePlaces: null,
    dateFlights:null,
    dateEndFlight:null,
    sumTicket:null,
    dayWeek:null
  };
  content?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllCity().subscribe((data:CityData[])=>{
      this.cityFrom = data;
      this.cityTo = data;
    },
    err => {
      this.content = JSON.parse(err.error).message;
    });
  }
  anyFlightParams(): void{
    if(this.showAnyFlightParams){
      this.showAnyFlightParams = false;
      this.disabledData=null;
    } else{
      this.showAnyFlightParams = true;
      this.disabledData=true;
    }
  }
  createPossibleFlight(){
    if(this.showAnyFlightParams){
      let directions = new Array<Date>();
      let date = new Date(this.possibleFlightDate.dateFlights);
      let targetDate = new Date(this.possibleFlightDate.dateEndFlight);
      let nowDate = new Date();
      while(date.getTime()!=targetDate.getTime()){
        date.setDate(date.getDate()+1);
        let delta = this.possibleFlightDate.dayWeek - date.getDay();
        if (delta >= 0)
        {
         nowDate.setDate(date.getDate() + delta)
        } else {
          nowDate.setDate(date.getDate() + 7 + delta);
        }
        if(nowDate.getTime()<=targetDate.getTime()){
          if(!directions.find(i=>i.getTime()==nowDate.getTime()) ||directions.find(i=>i.getTime()==nowDate.getTime()) ==undefined){
            directions.push(new Date(nowDate.getTime()));
          }
          
        }
        
      }
      console.log(directions);
      directions.forEach(i=>{
        this.possibleFlightDateSave.push(new PossibleFlightDate(i,this.possibleFlightDate.freePlaces,this.possibleFlightDate.sumTicket))
      });
      console.log(this.possibleFlightDateSave);
    } else {

    }
    this.flightData=(new PossibleFlightsData(
      this.cityFrom.find(i=>i.id==this.cityFromValue),
      this.cityTo.find(i=>i.id==this.cityToValue),
      this.possibleFlightForm.planeTypes,
      this.possibleFlightDateSave
      ));
      console.log(this.flightData);
      this.userService.createPossibleFlight(this.flightData).subscribe(
        (data: any) => {
          alert("создано");
        },
        error => console.log(error)
    );
      console.log(this.flightData);
  }
}
