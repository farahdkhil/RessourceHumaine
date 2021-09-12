import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-archived-employees',
  templateUrl: './archived-employees.component.html',
  styleUrls: ['./archived-employees.component.css']
})
export class ArchivedEmployeesComponent implements OnInit {

  id : any; 
  Allemployees: User[]=[];
  p : number=1;
  nom: string = "";
  employees:User[]=[];
  constructor(private employeService:UserService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(){
    this.employeService.getArchivedEmployees().subscribe(
      (response:any) => {
        this.employees = response; }
     );
  }

  deleteEmploye(employe:any): void {
    this.employeService.deleteEmployeById(employe.idUser)
      .subscribe( (data : any) => {
        this.employees = this.employees.filter(u => u !== employe);

      })  
  }
  filterByName(nom:string) {    
    this.employees= this.Allemployees.filter( (c) => c.nom?.includes(nom));
  }
}
