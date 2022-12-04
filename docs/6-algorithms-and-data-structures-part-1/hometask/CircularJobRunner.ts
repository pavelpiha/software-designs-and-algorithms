import { BinaryHeap } from "./BinaryHeap";
import { Job } from "./Job";
import { MinBinaryHeap } from "./MinBinaryHeap";

export class CircularJobRunner {
  initialCapacity: number = 10;
  jobs: BinaryHeap = new BinaryHeap();
  // jobs: MinBinaryHeap = new MinBinaryHeap();

  constructor() {}

  insert(job: Job) {
    this.jobs.insert(job);
  }

  remove(): Job | null {
    if (this.isEmpty()) {
      console.log("Underflow");
      return null;
    } else {
      return this.jobs.remove();
    }
  }

  isEmpty(): boolean {
    return this.jobs.size() == 0;
  }

  size(): number {
    return this.jobs.size();
  }

  runJobs() {
    setTimeout(() => {
      while (this.jobs.size()) {
        const job = this.remove();
        job?.run();
      }
    }, 0);
  }
}
