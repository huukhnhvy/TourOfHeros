import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoPaged } from './todo-paged';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoUrl = "https://localhost:7053/api/todoitems";

  constructor(private httpClient: HttpClient) { }

  getTodoPaged(): Observable<TodoPaged> {
    return this.httpClient.get<TodoPaged>(this.todoUrl);
  }
}
