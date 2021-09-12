import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UploadfileService } from 'src/app/services/uploadfile/service-uploadfile.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

 //user: employe = new employe();
 title = 'File-Upload-Save';
  
  

 public fileImage!: File;
 user: User = new User();


 constructor(private employeService:UserService,private uploadService: UploadfileService ) {}

 

 ngOnInit() {}

 downloadFile(){
   const link = document.createElement('a');
   link.setAttribute('target', '_blank');
   link.setAttribute('href', '_File_Saved_Path');
   link.setAttribute('download', 'file_name.pdf');
   document.body.appendChild(link);
   link.click();
   link.remove();
   }

   selectFileImage(event:any){
     this.fileImage = event.target.files[0];
   }

   createEmploye():void {
     this.employeService.createEmploye(this.user,this.fileImage)
       .subscribe(  data => {
         alert("candidate created successfully");
       } );
     };
}
