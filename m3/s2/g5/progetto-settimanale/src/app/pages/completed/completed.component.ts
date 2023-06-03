import { Component } from '@angular/core';
import { ITodo } from 'src/app/Models/Itodo';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss'],
})
export class CompletedComponent {
  todos: ITodo[] = [];
  loading: boolean = true;

  constructor(private todoSvc: TodosService) {}

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todoSvc.getTodos().then((todosResponse) => {
      this.todos = todosResponse;
      this.loading = false;
    });
  }
}
