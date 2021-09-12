import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employe : User = new User();
  id : any; 
  employees: User[]=[];
  Allemployees: User[]=[];
  p : number=1;
  nom: string = "";

  constructor(private employeService:UserService,
    private router:Router, 
    private userService: UserService) { }

  ngOnInit() {
    this.getEmployees();
    
  }

  getEmployees(){
    this.employeService.getActiveEmployees().subscribe(
      (response:any) => {
        this.employees = response; }
     );
  }

  deleteEmploye(employe:any): void {
    this.employeService.deleteEmployeById(employe.idUser)
      .subscribe( (data:any) => {
        this.employees = this.employees.filter(u => u !== employe);

      })
    
  }

  archiveEmploye(employe:any) {

    this.employeService.archiveEmploye(employe.idUser)
    .subscribe( (employe:any) => {
      console.log("Employee successfully archived")
      },(error:any) => {
       console.log("Failed action")
      }
  ); 
    
  };

 
  updateUser(employe:any){  
    this.employeService.setter(employe);
    this.router.navigate(['/updateEmploye']);

  }
  
  filterByName(nom:string) {    
    this.employees= this.Allemployees.filter( (c) => c.nom?.includes(nom));
  }
}
