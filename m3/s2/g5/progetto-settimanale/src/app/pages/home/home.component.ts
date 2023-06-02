import { Component } from '@angular/core';
import { ITodo } from 'src/app/Models/Itodo';
import { Todos } from 'src/app/Models/todos';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  todos: ITodo[] = [];
  loading: boolean = true;
  todo: Todos = new Todos('', false);

  constructor(private todoSvc: TodosService) {}

  ngOnInit() {
    this.getTodos();
  }

  delete(id?: number) {
    this.todoSvc.deleteTodo(id).then((res) => {
      console.log('todo eliminato');
      this.getTodos();
    });
  }

  getTodos() {
    this.todoSvc.getTodos().then((todosResponse) => {
      this.todos = todosResponse;
      this.loading = false;
    });
  }

  create() {
    this.todoSvc.addTodo(this.todo).then((res) => console.log(res));
    this.getTodos();
  }

  completeTodo(id?: number) {
    this.todoSvc.toggleStatus(id!).then((response) => this.getTodos());
  }
}
