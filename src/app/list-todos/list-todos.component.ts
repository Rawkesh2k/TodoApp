import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css',
})
export class ListTodosComponent implements OnInit {
  todos: Todo[] = [];
  message: String = '';
  //[
  //   new Todo(1,'Things to do today on Day1',false, new Date()),
  //   new Todo(2,'Explore Bharat',false, new Date()),
  //   new Todo(3,'Vibrant India',false, new Date())
  // ];
  constructor(private todoService: TodoDataService, private router: Router) {}

  ngOnInit(): void {
    this.refreshTodos();
  }
  refreshTodos() {
    this.todoService.retieveAllTodos('in28Minutes').subscribe((response) => {
      console.log(response);
      this.todos = response;
    });
  }

  deleteTodo(id: number) {
    console.log(`delete todo ${id}`);
    this.todoService.deleteTodo('raakesh', id).subscribe((response) => {
      console.log(response);
      this.message = `Delete successful for the Todo with the ID:  ${id}`;
      this.refreshTodos();
    });
  }

  updateTodo(id: number) {
    console.log(`update ${id}`);
    this.router.navigate(['todos',id])
  }
  addTodo() {
    this.router.navigate(['todos',-1])
  }
}
