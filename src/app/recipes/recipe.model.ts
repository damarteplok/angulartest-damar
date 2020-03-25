export class RecipeModel {
  public id: number;
  public name: string;
  public description: string;
  public imagePath: Array<object>;
  public likes: number;

  constructor(id: number, name: string, desc: string, imagePath: Array<object>, likes: number) {
    this.id = id;
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.likes = likes;
  }
}
