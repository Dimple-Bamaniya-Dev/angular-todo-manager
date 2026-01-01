import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Todo {
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTodo = '';
  todos: Todo[] = [];

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push({ title: this.newTodo, completed: false });
      this.newTodo = '';
    }
  }

  toggleTodo(todo: Todo) {
    todo.completed = !todo.completed;
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
