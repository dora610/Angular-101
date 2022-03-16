import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/Todo';
import { TodoService } from 'src/app/service/todo.service';
import { faTrashAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  faTrash = faTrash;
  todos!: Todo[];
  constructor(private todoService: TodoService) { }  

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  toggleTodoStatus(todo: Todo){
    this.todoService.toggleTodo(todo.id);
  };

  deleteTodo(todo: Todo){
    this.todoService.deleteTodo(todo.id);
  };

}
