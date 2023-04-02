import { Component } from '@angular/core';
import { TodoInterface } from '../_interface/todo-interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  todos: TodoInterface[] = [
    { name: 'Angular lernen', id: '12345', finished: false },
    { name: 'Angular lernen', id: '12345', finished: false },
  ];
}
