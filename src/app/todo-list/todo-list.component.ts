import { Component, OnInit } from '@angular/core';

import { Todo } from '../_interface/todo-interface';
import { TodoService } from '../_service/todo-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoServie: TodoService) {}

  ngOnInit(): void {
    this.todos = this.todoServie.getAllToDos();
  }
}
