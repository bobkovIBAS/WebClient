import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

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
  content?: string;
  showRegistartionFlight= false;
  showRegistartionFlightDone=false;
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
  }

  selectFligth(): void{
    if(this.selected.id.length>0){
      this.showRegistartionFlight = true;
      this.showStaticText=false;
    }
  }
  
  onCheckChange(event){
    if(event.target.checked){
      this.selected.id=event.target.value;
    }
  }

  createFlightData(){
    if(this.tokenStorage.getToken()!=null){
      this.userService.saveFlightData(this.selected.id,this.loginForm).subscribe(
        (data: any) => {
          this.showRegistartionFlight=false;
          this.showRegistartionFlightDone = true;
          this.showStaticText=false;
        },
        error => console.log(error));
    } else{
      this.router.navigate(['login']);
    }

  } 
  
}
