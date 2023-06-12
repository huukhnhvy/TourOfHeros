import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo-service.service';
import { TodoPaged } from '../todo-paged';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todolist: Todo[] = [];

  constructor(private todoService: TodoService) {

  }

  ngOnInit(): void {
    this.todoService.getTodoPaged().subscribe((paged: TodoPaged) => {
      this.todolist = paged.data;
    });
  }
}
