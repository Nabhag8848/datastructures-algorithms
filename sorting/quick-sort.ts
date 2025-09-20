export class QuickSort {
  sort(arr: Array<number>, low: number, high: number): Array<number> {
    if (arr.length === 0) {
      return [];
    }

    if (low < high) {
      const partitionIndex = this.partition(arr, low, high);
      this.sort(arr, low, partitionIndex - 1);
      this.sort(arr, partitionIndex + 1, high);
    }

    return arr;
  }

  private partition(arr: Array<number>, low: number, high: number): number {
    const pivot = arr[low];
    let i = low;
    let j = high;

    while (i < j) {
      while (arr[i] <= pivot && i <= high - 1) i++;
      while (arr[j] > pivot && j >= low + 1) j--;

      if (i < j) {
        this.swap(arr, i, j);
      }
    }

    this.swap(arr, low, j);

    return j;
  }

  private swap(arr: Array<number>, i: number, j: number) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

const arr = new Array(4, 6, 2, 5, 7, 9, 1, 3);
const quick = new QuickSort();
console.log(quick.sort(arr, 0, arr.length - 1));
console.log(quick.sort([], 0, -1));
