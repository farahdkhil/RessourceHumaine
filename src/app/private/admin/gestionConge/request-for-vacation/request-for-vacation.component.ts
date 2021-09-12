import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conge } from 'src/app/models/conge';
import { User } from 'src/app/models/user';
import { CongeService } from 'src/app/services/conge/conge.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-request-for-vacation',
  templateUrl: './request-for-vacation.component.html',
  styleUrls: ['./request-for-vacation.component.css']
})
export class RequestForVacationComponent implements OnInit {

  id:any;
  conge :Conge[]=[];
  congeList : Conge = new Conge();
  employe : User = new User();
   constructor( private route: ActivatedRoute,private employeService:UserService,
     private congeService: CongeService) { }
 
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getConge();
  }

  
  getConge(){
    console.log(this.id);
    this.congeService.getConge(this.id).subscribe(
      response => {
        this.conge = response ; }
    );
  }

  onAcceptConge() {
    
    this.congeService.acceptConge(this.id)
    .subscribe(  (conge) => {
     console.log("Holiday accepted")
    },(error) => {
      console.log("failed action")
    }
    );
  };


  onRefuseConge() {
    this.congeService.refuseConge(this.id)
    .subscribe(  (conge) => {
      console.log("Holiday refused")
    },(error) =>{
      console.log("failed action")
    }
    );
  };
  }



