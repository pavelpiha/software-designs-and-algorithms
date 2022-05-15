import { CircularJobRunner } from "./CircularJobRunner";
import { CustomJob } from "./CustomJob";

let jobRunner = new CircularJobRunner();
for (let index = 0; index < 100; index++) {
  jobRunner.insert(new CustomJob());
}

setTimeout(() => {
  jobRunner.runJobs();
}, 100);
