import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Depense } from 'src/app/models/depense';

@Injectable({
  providedIn: 'root'
})
export class DepenseService {

  constructor(private httpClient:HttpClient) { }

  public getDepenses(){
    return this.httpClient.get<any>("http://localhost:8080/depenses");
  }

  public getDepense(){
    return this.httpClient.get<any>("http://localhost:8080/budget/");
  }

  public createDepense(depense:Depense){
    return this.httpClient.post<any>("http://localhost:8080/createDepense",depense);
  }


  public deleteExpenseById (id: number)  {
    return this.httpClient.delete("http://localhost:8080/deleteDepense"+"/" + id);
  }
}
