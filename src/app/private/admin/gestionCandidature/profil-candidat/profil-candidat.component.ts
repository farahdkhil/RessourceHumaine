import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidature } from 'src/app/models/candidature';
import { CandidatureService } from 'src/app/services/candidature/candidature.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-profil-candidat',
  templateUrl: './profil-candidat.component.html',
  styleUrls: ['./profil-candidat.component.css']
})
export class ProfilCandidatComponent implements OnInit {

  id: any ;
  candidate : Candidature = new Candidature();
  constructor(private route: ActivatedRoute, private candidateService : CandidatureService,
    private userService : UserService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getCandidate();
    
  }

  getCandidate() {
    console.log(this.id);
    this.candidateService.getCandidate(this.id).subscribe(
      response => {
        this.candidate = response ; }
    );
  }
}
