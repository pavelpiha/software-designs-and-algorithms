export interface Job {
  priority: number;
  run(): void;
}
