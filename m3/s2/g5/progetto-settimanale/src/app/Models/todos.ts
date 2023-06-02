import { ITodo } from './Itodo';

export class Todos implements ITodo {
  id?: number;
  title: string;
  completed: boolean;

  constructor(title: string, completed: boolean, id?: number) {
    this.id = id;
    this.title = title;
    this.completed = completed;
  }
}
