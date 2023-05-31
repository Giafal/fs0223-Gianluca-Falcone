export class Post {
  id: number;
  body: string;
  title: string;
  active: boolean;
  type: string;
  constructor(
    id: number,
    body: string,
    title: string,
    active: boolean,
    type: string
  ) {
    this.id = id;
    this.body = body;
    this.title = title;
    this.active = active;
    this.type = type;
  }
}
