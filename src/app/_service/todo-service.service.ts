import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Todo } from '../_interface/todo-interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todosChanged = new Subject<Todo[]>();

  todos: Todo[] = [];

  constructor() {}

  getAllToDos() {
    return this.todos;
  }

  addToDo(todo: Todo) {
    this.todos.push(todo);
    this.todosChanged.next(this.todos.slice());
  }

  deleteToDo(id: number) {
    const newToDos = this.todos.filter((todo) => todo.id !== id);
    this.todos = [...newToDos];
    this.todosChanged.next(this.todos.slice());
  }

  deleteAllToDos() {
    this.todos = [];
    this.todosChanged.next(this.todos.slice());
  }
}
