import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToDoList } from 'src/app/models/to-do-list';
import { ToDoListService } from 'src/app/services/to-do/to-do-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

 
  isPopupOpened = false;
  todo : ToDoList = new ToDoList();
  editing: boolean = false;
  editingTodo: ToDoList = new ToDoList();
  todos:ToDoList[]=[];

  constructor(private todoService:ToDoListService,private router:Router) { }

  ngOnInit() {
    this.getAllTodos();
  }

  onAddTodo() {
    this.openTodoDialog(null);
  }

  openTodoDialog(data?:any){
     
  }

  getAllTodos(){
    this.todoService.getTodos()
    .subscribe(
      response => {
        this.todos = response;
       }
     );
  }

  deleteTodo(todo:any): void {
    this.todoService.deleteTodo(todo.id)
      .subscribe( data => {
        this.todos = this.todos.filter(u => u !== todo);
      })
    
  }

  updateTodo(todo : any){  
    this.openTodoDialog(todo);
    }
  

  toggleCompleted(todoData: any): void {
    todoData.completed = !todoData.completed;
    this.todoService.comletedTodo(todoData.id);
  }

  /*editTodo(todoData: Todo): void {
    this.editing = true;
    
  }*/

  

  completedTodo (id:number){
    this.todoService.comletedTodo(id);   
  }

}
