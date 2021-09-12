import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDoList } from 'src/app/models/to-do-list';
import { ToDoListService } from 'src/app/services/to-do/to-do-list.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  todos:ToDoList[]=[];
  public todo: ToDoList = new ToDoList();

  constructor( public data: ToDoList,
    private route: ActivatedRoute,
    private router:Router, 
    private todoService:ToDoListService) { }

  ngOnInit() {
    if (this.data !== null){
      this.todo = this.data;
    }
  }

  onSubmit(){
  
  this.onCreateTodo();

  }

  onCreateTodo():void {
    
    this.todoService.createTodo(this.todo)
    .subscribe(  data => {
      this.router.navigateByUrl("/todo-list")
    });
  
  
  };


  onClose(){
    this.router.navigateByUrl("/todo-list")
  }

}
