import { Component, OnInit, OnDestroy } from '@angular/core';

import { Todo } from '../_interface/todo-interface';
import { TodoService } from '../_service/todo-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit, OnDestroy {
  todos: Todo[] = [];
  private todoSub: Subscription;

  constructor(private todoServie: TodoService) {}

  ngOnInit(): void {
    this.todos = this.todoServie.getAllToDos();
    this.todoSub = this.todoServie.todosChanged.subscribe((todos: Todo[]) => {
      this.todos = todos;
    });
  }

  ngOnDestroy(): void {
    this.todoSub.unsubscribe();
  }

  deleteAllToDos() {
    this.todoServie.deleteAllToDos();
  }
}
