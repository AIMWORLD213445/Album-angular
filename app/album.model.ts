export class Album {
  public total: number = 0;
  public bought: boolean = false;
  constructor(public name: string, public artist: string, public price: number, public genre: string){ }
}
