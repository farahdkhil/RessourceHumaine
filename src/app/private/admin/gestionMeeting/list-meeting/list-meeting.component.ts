import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meeting } from 'src/app/models/meeting';
import { MeetingService } from 'src/app/services/meeting/meeting.service';

@Component({
  selector: 'app-list-meeting',
  templateUrl: './list-meeting.component.html',
  styleUrls: ['./list-meeting.component.css']
})
export class ListMeetingComponent implements OnInit {

  meeting : Meeting = new Meeting() ;
  meetings: Meeting[]=[] ;
  
  constructor(
    private meetingService:MeetingService,
    private router:Router) { }

  ngOnInit() {
    this.getAllmeetings();
  }

  getAllmeetings() {
    this.meetingService.getAllmeetings().subscribe(
      (result : any) => {
        this.meeting = result;
        this.meetings = result;
      },
      (err : any) => {
        console.log(err);      
      }
    )
  }

  deleteMeetingById(meeting:any): void {
    this.meetingService.deleteMeetingById(meeting.id).subscribe(
      (result :any) => {
  
        let index = this.meetings.indexOf(meeting);
        this.meetings.splice(index, 1);
       
      },
      (err : any) => {
        console.log(err);
      }
  
    )
  }

}
