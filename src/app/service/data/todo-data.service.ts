import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  constructor(private http: HttpClient) {}

  retieveAllTodos(username: string) {
    return this.http.get<Todo[]>(
      `http://localhost:8080/users/${username}/todos`
    );
    //console.log('Execute Hello World Bean Service');
  }
  deleteTodo(username: string, id: number) {
    return this.http.delete(
      `http://localhost:8080/users/${username}/todos/${id}`
    );
  }
  retieveTodo(username: string, id: number) {
    return this.http.get<Todo>(
      `http://localhost:8080/users/${username}/todos/${id}`
    );
  }
  updateTodo(username: string, id: number, todo: any) {
    return this.http.put(
      `http://localhost:8080/users/${username}/todos/${id}`,
      todo
    );
  }

  createTodo(username: string, todo: any) {
    return this.http.post(
      `http://localhost:8080/users/${username}/todos`,
      todo
    );
  }
}
