import { Edge } from "./Edge";

export class Vertex {
  nodes: Edge[];
  weight: number;

  constructor(public label: string) {
      this.label = label;
      this.weight = 0;
      this.nodes = [];
  }

  addEdge(to: string, weight: number) {
      this.nodes.push(new Edge(this.label, to, weight));
  }
}
