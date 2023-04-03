import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Todo } from '../_interface/todo-interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  /* todosChanged = new Subject<Todo[]>(); */

  todos: Todo[] = [
    { name: 'Angular lernen', id: 12345, finished: false },
    { name: 'Angular lernen', id: 12345, finished: false },
  ];

  constructor() {}

  getAllToDos() {
    return this.todos;
  }

  addToDo(todo: Todo) {
    this.todos.push(todo);
    /* this.todosChanged.next(this.todos.slice()); */
  }
}
