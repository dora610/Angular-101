import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Todo } from 'src/app/model/Todo';
import { TodoService } from 'src/app/service/todo.service';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  todo!: Todo;
  title = new FormControl('');
  id: number;

  constructor(private todoService: TodoService) {
    this.id = 4200;
  }

  ngOnInit(): void {}

  onSubmit(e: Event) {
    e.preventDefault();
    // console.log(this.title.value);
    this.todo = {
      id: this.id.toString(),
      title: this.title.value,
      isCompleted: false,
      date: new Date(),
    };
    this.todoService.addTodo(this.todo);
    this.id++;
    this.title.setValue('');
  }
}
