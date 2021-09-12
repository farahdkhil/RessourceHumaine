import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isAdmin : Boolean = false;
  isEmployee : Boolean = false;
    constructor(private userService : UserService) { }
  
    ngOnInit(): void {
      this.isAdmin = this.userService.isLoggedInAdmin();
      this.isEmployee = this.userService.isLoggedInEmployee();
    }
        

}
