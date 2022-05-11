import { Dijkstra, DijkstraImplementation } from "./DijkstraImplementation";
import { Edge } from "./Edge";
import { Vertex } from "./Vertex";
import { WeightedGraph, WeightedGraphImplementation } from "./WeightedGraph";

const vertices = [
  new Vertex("1"),
  new Vertex("2"),
  new Vertex("3"),
  new Vertex("4"),
  new Vertex("5"),
];

const edges = [
  new Edge("1", "4", 3),
  new Edge("1", "2", 5),
  new Edge("1", "3", 4),
  new Edge("2", "4", 6),
  new Edge("2", "3", 5),
];
const graph: WeightedGraph<Vertex> = new WeightedGraphImplementation();

vertices.forEach((vertex) => graph.addVertex(vertex));
edges.forEach((edge: Edge) => graph.addEdge(edge));

const dijkstra: Dijkstra = new DijkstraImplementation(graph);

console.log(dijkstra.findShortestPath("4", "3")); // { path: ['4', '1', '3'], distance: 7 }
console.log(dijkstra.findShortestPath("1", "5")); // { path: [], distance: Infinity }
console.log(dijkstra.findShortestPath("1", "1")); // { path: ['1'], distance: 0 }

console.log(dijkstra.findAllShortestPaths("4"));
