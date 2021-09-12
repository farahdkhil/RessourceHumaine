import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Meeting } from 'src/app/models/meeting';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  meeting : Meeting = new Meeting();
  constructor(private httpClient:HttpClient) { }

  public getAllmeetings() {
  
    return this.httpClient.get<any>("http://localhost:8080/meetings");
   }

  public onCreateMeeting(meeting: Meeting) {
   
   return this.httpClient.post<any>("http://localhost:8080/meetings/create",meeting);
  }

  public deleteMeetingById (id: number)  {
    return this.httpClient.delete("http://localhost:8080/meetings/delete"+"/" + id);
  }

  public updateMeeting(meeting:Meeting) {
    return this.httpClient.put("http://localhost:8080/meeting",meeting);
  }

  getOne(id: any){
    return this.httpClient.get<any>("http://localhost:8080/meetings/one"+"/" + id);
  }

  setter(meeting:Meeting){
    this.meeting= meeting;
  }

 getter(){
   return this.meeting;
 }

}
