
export class Edge {
  from: string;
  to: string;
  weight: number;

  constructor(from: string, to: string, weight: number) {
    this.from = from;
    this.to = to;
    this.weight = weight;
  }
}
