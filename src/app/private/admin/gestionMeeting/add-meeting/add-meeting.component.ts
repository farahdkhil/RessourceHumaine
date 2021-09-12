import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Meeting } from 'src/app/models/meeting';
import { MeetingService } from 'src/app/services/meeting/meeting.service';

@Component({
  selector: 'app-add-meeting',
  templateUrl: './add-meeting.component.html',
  styleUrls: ['./add-meeting.component.css']
})
export class AddMeetingComponent implements OnInit {
  myForm: FormGroup;
  meeting: Meeting = new Meeting();

  constructor(
    private fb: FormBuilder,
    private meetingService: MeetingService,
    private router: Router) { 

    let formControls = {
      titre: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      type: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-1-9]+"),
        Validators.minLength(2)
      ]),
      meetingDay: new FormControl('', [
        Validators.required,
      ]),
      meetingTime: new FormControl('', [
        Validators.required,
      ]),
      canceled: new FormControl('', [
      ])

    }
    this.myForm = this.fb.group(formControls);
  }
  get titre() { return this.myForm.get('titre') }
  get type() { return this.myForm.get('type') }
  get meetingDay() { return this.myForm.get('meetingDay') }
  get meetingTime() { return this.myForm.get('meetingTime') }
  get canceled() { return this.myForm.get('canceled') }
  ngOnInit() {
    this.meetingService.getAllmeetings().subscribe(
      (res : any)=>this.meeting=res,
      (err: any)=>console.log(err)   
    )
  }

  onSubmit() {
    this.onCreateMeeting();
  }

  onCreateMeeting(): void {
    let data = this.myForm.value ;
    console.log(data);
     
    let meeting = new Meeting(undefined, data.titre,data.type,data.meetingDay,data.meetingTime,data.canceled);
    this.meetingService.onCreateMeeting(meeting).subscribe(
      (res: any) => {
        console.log(res);
        this.router.navigateByUrl('/list-meeting')
      },
      (err: any) => {
        console.log(err)
      }

    ); 
    }
  
}
