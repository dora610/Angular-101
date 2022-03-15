import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from '../model/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[];

  constructor() {
    this.todos = [
      {
        id: '111',
        title: 'Learn docker',
        isCompleted: true,
        date: new Date(),
      },
      {
        id: '112',
        title: 'Learn go',
        isCompleted: false,
        date: new Date(),
      },
      {
        id: '113',
        title: 'Learn Kubernetes',
        isCompleted: false,
        date: new Date(),
      },
      {
        id: '114',
        title: 'Learn mongoDb',
        isCompleted: true,
        date: new Date(),
      },
      {
        id: '111',
        title: 'Learn redis',
        isCompleted: false,
        date: new Date(),
      },
    ];
  }

  getTodos() {
    return of(this.todos);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  toggleTodo(id: string) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
  }

  deleteTodo(id: string) {
    this.todos = this.todos.filter((todo): Todo | void => {
      if (todo.id !== id) {
        return todo;
      }
    });
  }
}
