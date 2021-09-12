import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
import { JwtHelperService } from '@auth0/angular-jwt';
const API_URL = 'http://localhost:8080/api/test/';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
 
  constructor(private http: HttpClient) { }

  public getUser(id: any) {
    console.log("this is id ="+ id)
    return this.http.get<any>("http://localhost:8080/users/"+ id);
  }


  public getUserAvatar(id: number){
    return this.http.get("http://localhost:8080/avatar/"+ id);
  }

  public getbudget(id: number){
    return this.http.get("http://localhost:8080/bu/"+ id);
  }

  loginAdmin(user:User){
    return this.http.post<any>("http://localhost:8080/users/", user);
  }

  updatePassword( email: String, oldPass: String, newPass: String ) {
    const addBody = {
      'email': email,
      'oldPass': oldPass,
      'newPass': newPass
    } ;

    return  this.http.post<User>("http://localhost:8080/updatePassword", addBody);
  }

  updateUsername( email: String, username: String ) {
    const addInfo = {
      'email': email,
      'username': username
      
    } ;

    return  this.http.post<User>("http://localhost:8080/updateUsername", addInfo);
  }

  
    isLoggedIn(){
  
      let token = localStorage.getItem("myToken");
  
      if (token) {
        return true ;
      } else {
        return false;
      }
    }
    isLoggedInAdmin(){
  
      let token = localStorage.getItem("myToken");
  
      if (token) {
        const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(token);
        if(decodedToken.data.role =="admin"){
          return true
        }else
        {return false ;}
      } else {
        return false;
      }
    }
    isLoggedInEmployee(){
  
      let token = localStorage.getItem("myToken");
  
      if (token) {
        const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(token);
        if(decodedToken.data.role =="employee"){
          return true
        }else
        {return false ;}
      } else {
        return false;
      }
    }
    public getEmployeesList()  {
      console.log("test call");
      return this.http.get<any>("http://localhost:8080/users");
    }
  
    public getEmploye(id: any){
      console.log("this is id ="+ id)
      return this.http.get<any>("http://localhost:8080/user/"+ id);
    }
  
    public archiveEmploye(id: any){
      return this.http.get<any>("http://localhost:8080/archiveEmploye/"+ id);
    }
  
    public getActiveEmployees(){
      return this.http.get<any>("http://localhost:8080/activeEmployees");
    }
  
    public getArchivedEmployees(){
      return this.http.get<any>("http://localhost:8080/archivedEmployees");
    }
  
    public generateReport(id: number){
      return this.http.get<any>("http://localhost:8080/report/pdf"+"/"+ id);
    }
  
    public deleteEmployeById (id: number)  {
      return this.http.delete("http://localhost:8080/users"+"/" + id);
    }
  
    public editUser (employe:any)  {
      return this.http.put("http://localhost:8080/updateUser",employe);
    }
  
    public editPhoto (fileImage:File,id:number)  {
  
      const data:FormData= new FormData();
      data.append('id',JSON.stringify(id));
      data.append('image',fileImage);
      return this.http.put("http://localhost:8080/photo?id="+id,fileImage);
    }
  
    public updateEmployee(employe:any, fileImage:File) {
      const data:FormData= new FormData();
      data.append('user',JSON.stringify(employe));
      data.append('image',fileImage);
      return this.http.put("http://localhost:8080/user",data);
    }
  
    public createEmploye(employe:any, fileImage:File) {
  
      const data:FormData= new FormData();
      data.append('user',JSON.stringify(employe));
      data.append('image',fileImage);
      
      return this.http.post<any>("http://localhost:8080/createEmploye", data);
    }
    employe: User = new User();
    setter(employe:any){
      this.employe= employe;
    }
  
   getter(){
     return this.employe;
   }
   
}