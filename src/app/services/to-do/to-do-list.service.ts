import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDoList } from 'src/app/models/to-do-list';

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {

  todo: ToDoList = new ToDoList();

  private baseUrl = 'http://localhost:8080';  

  constructor(private http:HttpClient) { }

  public getTodos(){
    return this.http.get<any>(this.baseUrl + '/todos/');
     
  }

  createTodo(todoData: ToDoList) {
    return this.http.post(this.baseUrl + '/todos/', todoData);
    todoData.completed=false;
      
  }


  deleteTodo(id: number) {
    return this.http.delete(this.baseUrl + '/todos'+'/' + id);
      
  }

  comletedTodo(id:number) {
    return this.http.get("http://localhost:8080/completed/"+id);
  }

  public updateTodo(todo:ToDoList) {
    return this.http.put("http://localhost:8080/todo",todo);
  }

  setter(todo:ToDoList){
    this.todo= todo;
  }

 getter(){
   return this.todo;
 }
}
