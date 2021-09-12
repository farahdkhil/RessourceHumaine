import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id: any ; 
  private employe: any ; 
  //public fileImage: File;
  public message: any;

  constructor(private route: ActivatedRoute, private router:Router,
    private employeService: UserService) { }

  ngOnInit() {
      this.employe = this.employeService.getter();
    }

  
    processForm(){
      
         this.employeService.editUser(this.employe).subscribe((employe)=>{
           console.log(employe);
           this.router.navigate(['/listEmployes']);
         },(error)=>{
           console.log(error);
         });
      }
}
