import { Component, Input } from '@angular/core';
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
  innerText: string = '';

  constructor(private todoSvc: TodosService) {}

  ngOnInit() {
    this.getTodos();
  }

  delete(id?: number) {
    this.todoSvc.deleteTodo(id).then((res) => {
      console.log('todo eliminato');
      this.getTodos();
      this.todoSvc.completedTodos.pop();
    });
  }

  getTodos() {
    this.todoSvc.getTodos().then((todosResponse) => {
      this.todos = todosResponse;
      this.loading = false;
    });
  }

  create() {
    if (this.innerText == '') {
      this.innerText = 'Inserisci un ToDo';
    } else if (this.innerText == 'Inserisci un ToDo') {
      this.innerText = 'Inserisci un ToDo';
    } else {
      this.todoSvc.addTodo(this.todo).then((res) => this.getTodos());
      this.innerText = '';
    }
  }

  completeTodo(id?: number) {
    this.todoSvc.changeStatus(id!).then((response) => this.getTodos());
    this.todoSvc.completedTodos.push(this.todo);
  }
}
