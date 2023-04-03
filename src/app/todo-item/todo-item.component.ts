import { Component, Input } from '@angular/core';
import { Todo } from '../_interface/todo-interface';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input() todoElement: Todo;

  constructor() {}
}
