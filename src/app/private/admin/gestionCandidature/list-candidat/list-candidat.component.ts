import { Component, OnInit } from '@angular/core';
import { Candidature } from 'src/app/models/candidature';
import { CandidatureService } from 'src/app/services/candidature/candidature.service';

@Component({
  selector: 'app-list-candidat',
  templateUrl: './list-candidat.component.html',
  styleUrls: ['./list-candidat.component.css']
})
export class ListCandidatComponent implements OnInit {

  candidats: Candidature[]=[];
  candidate: Candidature = new Candidature ; 
  
  
  constructor(  private candidateService :CandidatureService) {}


  ngOnInit() {
    this.getCandidats();
  }

  getCandidats(){
    this.candidateService.getCandidatesList().subscribe(
      response => {
        this.candidats = response; }
  );
}



download(candidate :any){
 
  console.log("hello",this.candidate)
  this.candidateService.downloadFile(candidate.pathCv)
  .subscribe( data =>  {
    alert ("file downloaded succeffully");
  })
}

deleteTodo(candidate:any): void {
  this.candidateService.deleteCandidate(candidate.idUser)
    .subscribe( data => {
      this.candidats = this.candidats.filter(u => u !== candidate);
    })
  
}

}
