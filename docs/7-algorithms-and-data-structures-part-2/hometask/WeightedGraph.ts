import { Edge } from "./Edge";
import { Vertex } from "./Vertex";

export interface WeightedGraph<T> {
  vertices: any;
  addVertex(key: T): void;
  addEdge(edge: Edge): void;
}

export class WeightedGraphImplementation implements WeightedGraph<Vertex> {
  vertices: any;

  constructor() {
    this.vertices = {};
  }

  addVertex(vertex: Vertex): void {
    if (!this.vertices[vertex.label]) {
      this.vertices[vertex.label] = vertex;
    }
  }

  addEdge(edge: Edge): void {
    const { from, to, weight } = edge;
    if (!this.vertices[from] || !this.vertices[to] || from === to) return;

    this.vertices[from].addEdge(to, weight);
    this.vertices[to].addEdge(from, weight);
  }
}
