import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Depense } from 'src/app/models/depense';
import { DepenseService } from 'src/app/services/depense/depense.service';

@Component({
  selector: 'app-depenses',
  templateUrl: './depenses.component.html',
  styleUrls: ['./depenses.component.css']
})
export class DepensesComponent implements OnInit {
  public depense: Depense = new Depense;
  public depenses: Depense[]=[];
  constructor(private depenseService: DepenseService,
  private router: Router) { }
  
  ngOnInit() {
    this.getExpenses();
    this.getDepenses();
    
  }
  getDepenses() {
    throw new Error('Method not implemented.');
  }
  getDepense() {
   
    this.depenseService.getDepense().subscribe(
      (response : any) => {
        this.depense= response ;
     }
    );
  }

  onAddDepense():void{
    this.depenseService.createDepense(this.depense)
    .subscribe(  data => {
      this.depenses.push(data);
      
    } ,(error) => {
     console.log(error);
  }
    );
  }
  getExpenses(){
    this.depenseService.getDepenses().subscribe(
      response => {
        this.depenses = response; }
     );
  }
  deleteExpense(depense :any){
    this.depenseService.deleteExpenseById(depense.id)
      .subscribe( data => {
        this.depenses = this.depenses.filter(u => u !== depense);
      })
    
  }

}
