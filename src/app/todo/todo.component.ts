import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  id!: number;
  todo: Todo | any;
  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date());
    if (this.id != -1) {
      this.todoService
        .retieveTodo('Raakesh', this.id)
        .subscribe((data) => (this.todo = data));
    }
  }
  saveTodo() {
    if (this.id === -1) {
      this.todoService.createTodo('Raakesh', this.todo);
    } else {
      this.todoService
        .updateTodo('Raakesh', this.id, this.todo)
        .subscribe((data: any) => {
          console.log(data);
          this.router.navigate(['todos']);
        });
    }
  }
}
