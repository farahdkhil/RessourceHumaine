import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Candidature } from 'src/app/models/candidature';

@Injectable({
  providedIn: 'root'
})
export class CandidatureService {

  candidate: Candidature = new Candidature();
  constructor(private httpClient:HttpClient) { }

  public createCandidate(candidate:any, fileCV:File, fileLettre:File) {

    const data:FormData= new FormData();
    data.append('candidate',JSON.stringify(candidate));
    data.append('cv_file',fileCV);
    data.append('motiv_letter_file',fileLettre);

    return this.httpClient.post<Candidature>("http://localhost:8080/createcandidate", data);
  }

  public getCandidatesList(){
    console.log('test');
    return this.httpClient.get<any>("http://localhost:8080/candidats");
  }

  public getCandidate(id: number){
    return this.httpClient.get<Candidature>("http://localhost:8080/candidat"+"/"+ id);
  }

  public downloadFile(pathCv:String){
    
    return this.httpClient.get<any>("http://localhost:8080//downloadFile"+"/"+ pathCv);
  }

  public sendConfirmMessage(id:number){
    return this.httpClient.get<any>("http://localhost:8080/sendConfirmMessage/"+ id);
  }

  public sendDenyMessage(id:number){
    return this.httpClient.get<any>("http://localhost:8080/sendDenyMessage/"+ id);
  }

  deleteCandidate(id: number) {
    return this.httpClient.delete("http://localhost:8080/candidate/" + id);
   
}
}
