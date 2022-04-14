import { Job } from "./Job";

export class CustomJob implements Job {
  priority: number;
  constructor() {
    this.priority = this.getPriority();
  }

  private getPriority(): number {
    return Math.floor(Math.random() * 10) + 1;
  }

  run(): void {
    // complex task
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < 500);
    console.log("priority ", this.priority);
  }
}
