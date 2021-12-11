//Repository model holding repo attributes
export class Repository {
  public username: string;
  public avatar: string;
  public name: string;
  public description: string;
  public stars: number;
  public issues: number;

  constructor(
    username: string,
    avatar: string,
    name: string,
    description: string,
    stars: number,
    issues: number
  ) {
    this.username = username;
    this.avatar = avatar;
    this.name = name;
    this.description = description;
    this.stars = stars;
    this.issues = issues;
  }
}
