import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conge } from 'src/app/models/conge';
import { User } from 'src/app/models/user';
import { CongeService } from 'src/app/services/conge/conge.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-list-request',
  templateUrl: './list-request.component.html',
  styleUrls: ['./list-request.component.css']
})
export class ListRequestComponent implements OnInit {

  employe : User = new User();
  id : any; 
  employees: User[]=[];
  p : number=1;
  constructor(private employeService:UserService,private router:Router) { }

  ngOnInit() {
    this.getEmployees();
    
  }

  getEmployees(){
    this.employeService.getEmployeesList().subscribe(
      response => {
        this.employees = response; }
     );
  }

}
