import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Meeting } from 'src/app/models/meeting';
import { MeetingService } from 'src/app/services/meeting/meeting.service';

@Component({
  selector: 'app-update-meeting',
  templateUrl: './update-meeting.component.html',
  styleUrls: ['./update-meeting.component.css']
})
export class UpdateMeetingComponent implements OnInit {
  updateMeetingForm: FormGroup;
  private meeting: Meeting[]=[] ; 

  constructor(private meetingService:MeetingService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
     private router:Router)  {
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
    this.updateMeetingForm = this.fb.group(formControls);
  }
  get titre() { return this.updateMeetingForm.get('titre') }
  get type() { return this.updateMeetingForm.get('type') }
  get meetingDay() { return this.updateMeetingForm.get('meetingDay') }
  get meetingTime() { return this.updateMeetingForm.get('meetingTime') }
  get canceled() { return this.updateMeetingForm.get('canceled') }

  ngOnInit() {
    this.meetingService.getAllmeetings().subscribe(
      (res : any)=>this.meeting=res,
      (err : any)=>console.log(err)
    )
    this.meetingService.getOne(this.route.snapshot.params.id).subscribe(
      (res : any) => {        
        this.updateMeetingForm.patchValue({
          titre: res.titre,
          type: res.type,
          meetingDay: res.meetingDay, 
          meetingTime: res.meetingTime?.id,
          canceled: res.canceledUrl
    
        })
      },
      (err : any) => console.log(err)
    )    
  }

  updateMeeting(){
    let data = this.updateMeetingForm.value;
    let meeting = new Meeting(undefined, data.titre,data.type,data.meetingDay,data.meetingTime,data.canceled);
    this.meetingService.updateMeeting(meeting).subscribe(
      (res :any)=>this.router.navigateByUrl("/list-meeting"),
      (err :any)=>console.log(err)
      
    )
  }

}
