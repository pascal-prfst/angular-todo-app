import { Component } from '@angular/core';
import { TodoService } from '../_service/todo-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  theme: boolean = false;
  todoInput: string;

  constructor(private todoService: TodoService) {}

  currentDate = new Date().toLocaleDateString('de-DE', {
    weekday: 'short',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });

  switchTheme() {
    this.theme = !this.theme;
  }

  addTodo() {
    const todo = {
      name: this.todoInput,
      id: 2,
      finished: false,
    };
    this.todoService.addToDo(todo);
    this.todoInput = '';
  }
}
