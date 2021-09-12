import { Component, OnInit } from '@angular/core';
import { Conge } from 'src/app/models/conge';
import { CongeService } from 'src/app/services/conge/conge.service';

@Component({
  selector: 'app-review-vacation',
  templateUrl: './review-vacation.component.html',
  styleUrls: ['./review-vacation.component.css']
})
export class ReviewVacationComponent implements OnInit {

  isPopupOpened = false;
  conge : Conge = new Conge();
  conges : any;
  constructor(private congeService:CongeService) { }

  ngOnInit() {
    this.getConges();
  }

  getConges(){
    this.congeService.getCongesList().subscribe(
      response => {
        this.conges = response
      console.log(response)}
     );
     
  }

  

  onAcceptConge(id :any) {
    console.log(id+"hell");
    this.congeService.acceptConge(id)
    .subscribe(  data => {
      alert("Holiday accepted");
    });
  };

  onRefuseConge(id:any) {
    this.congeService.refuseConge(id)
    .subscribe(  data => {
      alert("Holiday refused");
    });
  };

  onDeleteConge(id:any){
    this.congeService.deleteConge(id)
    .subscribe(  data => {
      alert("Holiday deleted successfully");
    });
  }


}
