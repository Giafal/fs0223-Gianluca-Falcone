import { Injectable } from '@angular/core';
import { ITodo } from './Models/Itodo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  apiUrl: string = 'http://localhost:3000/todos';

  allTodos: ITodo[] = [];

  completedTodos: ITodo[] = [];

  constructor() {}

  getTodos(): Promise<ITodo[]> {
    return fetch(this.apiUrl).then((response) => response.json());
  }

  addTodo(todo: ITodo): Promise<ITodo> {
    return fetch(this.apiUrl, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo),
    }).then((response) => response.json());
  }

  deleteTodo(id: number = 0) {
    return fetch(this.apiUrl + '/' + id, {
      method: 'DELETE',
    }).then((response) => response.json());
  }

  changeStatus(id: number) {
    const thisUrl = `${this.apiUrl}/${id}`;
    const data = { completed: true };
    return fetch(thisUrl, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => res.json);
  }
}
