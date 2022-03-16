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
        id: '115',
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
    this.todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
  }

  deleteTodo(id: String) {
    this.todos = this.todos.filter((todo) => todo.id!==id);
    console.log(this.todos);
/*     let todoIndex = this.todos.indexOf(todo)
    
    this.todos.splice(todoIndex, 1) */
  }
}
