import { Vertex } from "./Vertex";
import { WeightedGraph } from "./WeightedGraph";

interface Path {
  path: string[];
  distance: number;
}

export interface Dijkstra {
  findShortestPath(startLabel: string, finishLabel: string): Path;
  findAllShortestPaths(label: string): Record<string, Path>;
}

export class DijkstraImplementation implements Dijkstra {
  vertices: any;
  constructor(graph: WeightedGraph<Vertex>) {
    this.vertices = graph.vertices;
  }

  findAllShortestPaths(label: string): Record<string, Path> {
    const vertices = this.vertices;
    let obj: { [k: string]: Path } = {};

    for (let vertex in vertices) {
      if (vertices[vertex].label !== label) {
        obj[vertices[vertex].label] = this.findShortestPath(label, vertex);
      }
    }
    return obj;
  }

  findShortestPath(start: string, finish: string): Path {
    const vertices = this.vertices;
    let nodes: any = {};

    for (let i in vertices) {
      if (vertices[i].label === start) {
        vertices[i].weight = 0;
      } else {
        vertices[i].weight = Number.MAX_VALUE;
      }
      nodes[vertices[i].label] = vertices[i].weight;
    }

    while (Object.keys(nodes).length !== 0) {
      let sortedVisitedByWeight: string[] = Object.keys(nodes).sort(
        (a, b) => vertices[a].weight - vertices[b].weight
      );
      let currentVertex: Vertex = vertices[sortedVisitedByWeight[0]];
      for (let j of currentVertex.nodes) {
        const calculateWeight: number = currentVertex.weight + j.weight;
        if (calculateWeight < vertices[j.to].weight) {
          vertices[j.to].weight = calculateWeight;
        }
      }
      delete nodes[sortedVisitedByWeight[0]];
    }
    const finishWeight: number = vertices[finish].weight;
    let arrayWithVertex: Array<string> = this.findPointsOfShortestWay(
      start,
      finish
    ).reverse();
    if (vertices[finish].nodes.length) {
      arrayWithVertex.push(finish);
    }
    return {
      path: arrayWithVertex,
      distance: finishWeight,
    };
  }

  private findPointsOfShortestWay(start: string, finish: string): string[] {
    const vertices = this.vertices;
    let nextVertex: string = finish;
    let arrayWithVertex: Array<string> = [];

    while (nextVertex !== start) {
      let minWeight: number = Number.MAX_VALUE;
      let minVertex: string = "";
      if (vertices[nextVertex].nodes.length === 0) {
        return [];
      }
      for (let i of vertices[nextVertex].nodes) {
        if (i.weight + vertices[i.to].weight < minWeight) {
          minWeight = vertices[i.to].weight;
          minVertex = i.to;
        }
      }
      arrayWithVertex.push(minVertex);
      nextVertex = minVertex;
    }
    return arrayWithVertex;
  }
}
