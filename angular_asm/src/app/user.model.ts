export class User {
  id: string;
  name: string;
  createdAt: string;

  constructor(id: string, name: string, createdAt: string) {
    this.id = id;
    this.name = name;
    this.createdAt = createdAt;
  }
}
