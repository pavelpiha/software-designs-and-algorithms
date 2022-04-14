import { CustomJob } from "./CustomJob";
import { Job } from "./Job";

export class CircularJobRunner {
  initialCapacity: number = 10;
  jobs: Job[] = [];

  constructor() {}

  insert(job: Job) {
    let contain = false;

    for (let i = 0; i < this.jobs.length; i++) {
      if (this.jobs[i].priority > job.priority) {
        this.jobs.splice(i, 0, job);
        contain = true;
        break;
      }
    }
    if (!contain) {
      this.jobs.push(job);
    }
  }

  remove(): Job | undefined {
    if (this.isEmpty()) {
      console.log("Underflow");
    } else {
      return this.jobs.shift();
      // return this.jobs.pop();
    }
  }

  isEmpty(): boolean {
    return this.jobs.length == 0;
  }

  size(): number {
    return this.jobs.length;
  }

  runJobs() {
    this.jobs.forEach(() => {
      setTimeout(() => {
        this.remove()?.run();
      }, 0);
      setTimeout(() => {
        console.log("priorityQueue.size()", this.size());
      }, 0);
    });
  }
}

