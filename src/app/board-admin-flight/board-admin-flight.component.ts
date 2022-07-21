import { Component, OnInit } from "@angular/core";
import { UserService } from "../_services/user.service";

@Component({
    selector: 'app-board-admin-flight',
    templateUrl: './board-admin-flight.component.html',
    styleUrls: ['./board-admin-flight.component.css']
  })
  export class BoardAdminFlight implements OnInit {
    content?: string;
  
    constructor(private userService: UserService) { }
  
    ngOnInit(): void {
    }
  }
  