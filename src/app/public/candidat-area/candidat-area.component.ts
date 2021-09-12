import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UploadfileService } from 'src/app/services/uploadfile/service-uploadfile.service';

@Component({
  selector: 'app-candidat-area',
  templateUrl: './candidat-area.component.html',
  styleUrls: ['./candidat-area.component.css']
})
export class CandidatAreaComponent implements OnInit {
 
  myForm: FormGroup;
  public fileCV!: File;
  public fileLettre!: File;
  constructor(private fb: FormBuilder, private uploadService: UploadfileService,) {
    let formControls = {
      firstname: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      datebirth: new FormControl('', [
        Validators.required,
       
      ]),
      email: new FormControl('', [
        Validators.required,
       
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(8)
      ]),
      cv: new FormControl('', [
        Validators.required,
        
      ]),
      coverletter: new FormControl('', [
        Validators.required,
        
      ]),
      apply: new FormControl('', [
        Validators.required,
       
      ]),
      level: new FormControl('', [
        Validators.required,
      ]),
      titleDip: new FormControl('', [
        Validators.required,
      ]),
      university: new FormControl('', [
        Validators.required,
      ]),
      yearsExp: new FormControl('', [
        Validators.required,
        Validators.pattern("[0-9]+"),
      ]),
      descExp: new FormControl('', [
        Validators.required,
        Validators.pattern("[1-9A-Za-z .'-]+"),
        Validators.minLength(10)
      ]),

    }
    this.myForm = this.fb.group(formControls);
  }
  get firstname() { return this.myForm.get('firstname') }
  get lastname() { return this.myForm.get('lastname') }
  get datebirth() { return this.myForm.get('datebirth') }
  get email() { return this.myForm.get('email') }
  get phone() { return this.myForm.get('phone') }
  get cv() { return this.myForm.get('cv') }
  get coverletter() { return this.myForm.get('coverletter') }
  get apply() { return this.myForm.get('apply') }
  get level() { return this.myForm.get('level') }
  get titleDip() { return this.myForm.get('titleDip') }
  get university() { return this.myForm.get('university') }
  get yearsExp() { return this.myForm.get('yearsExp') }
  get descExp() { return this.myForm.get('descExp') }
  ngOnInit(): void {
  }
  saveCandidature() {
    console.log(this.myForm.value);
  }
  selectFileLettre(event : any){
    this.fileLettre = event.target.files[0];
  }
  selectFileCV(event : any){
    this.fileCV = event.target.files[0];
  }
}
