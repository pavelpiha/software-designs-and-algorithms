import { Job } from "./Job";

export class BinaryHeap {
  heap: Job[] = [];

  getMin = () => this.heap[0];
  size = () => this.heap.length;
  isEmpty = () => this.heap.length === 0;
  getList = () => this.heap;

  //Insert Value
  insert(job: Job): void {
    const size = this.heap.length;

    if (size === 0) {
      this.heap.push(job);
    } else {
      this.heap.push(job);
      for (let i = Math.floor(this.heap.length / 2 - 1); i >= 0; i--) {
        this.minHeapify(this.heap, this.heap.length, i);
      }
    }
  }

  remove(): any {
    const min = this.heap[0];
    this.delete(min);
    return min;
  }

  private minHeapify(heap: Job[], heapLength: number, i: number): void {
    let smallest = i;
    let l = 2 * i + 1; //left child index
    let r = 2 * i + 2; //right child index

    //If left child is smaller than root
    if (l < heapLength && heap[l].priority < heap[smallest].priority) {
      smallest = l;
    }

    // If right child is smaller than smallest so far
    if (r < heapLength && heap[r].priority < heap[smallest].priority) {
      smallest = r;
    }

    // If smallest is not root
    if (smallest != i) {
      let temp = heap[i];
      heap[i] = heap[smallest];
      heap[smallest] = temp;

      // Recursively heapify the affected sub-tree
      this.minHeapify(heap, heapLength, smallest);
    }
  }

  private delete(job: Job): void {
    const size = this.heap.length;

    //Get the index of the number to be removed
    let i;
    for (i = 0; i < size; i++) {
      if (this.heap[i].priority === job.priority) {
        break;
      }
    }

    //Swap the number with last element
    [this.heap[i], this.heap[size - 1]] = [this.heap[size - 1], this.heap[i]];

    //Remove the last element
    this.heap.splice(size - 1);

    //Heapify the heap again
    for (let i = Math.floor(this.heap.length / 2 - 1); i >= 0; i--) {
      this.minHeapify(this.heap, this.heap.length, i);
    }
  }
}
