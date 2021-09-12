import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conge } from 'src/app/models/conge';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  id: any ;
  private sub: any ; 
  conge: Conge  = new Conge();
  employe: User = new User();
 
  constructor(private employeService:UserService,
    private userService:UserService, private route: ActivatedRoute,
    private router:Router) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getEmploye();
    console.log(this.id+"oooo");
  }

  getEmploye() {
    console.log(this.id);
    this.employeService.getEmploye(this.id).subscribe(
      response => {
        this.employe = response ; }
    );
  }

  generateReport(){
    this.employeService.generateReport(this.id).subscribe(
      (employe) => {
        console.log("Informations are successfully exported")
        },(error) => {
          console.log("Informations are successfully exported")
        }
    );
  }
}
