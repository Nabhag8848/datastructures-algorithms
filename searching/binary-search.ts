export class BinarySearch {
  search(arr: Array<number>, target: number) {
    let low = 0;
    let high = arr.length - 1;
    let mid = low + Math.floor((high - low) / 2);
    /* 
    (low + high) / 2 + low / 2 - low / 2
    2low/2 + high/ 2 - low / 2
    low + (high - low) / 2

     Javascript number can handle 9 quadrillion sum
    */

    while (low < high) {
      if (arr[mid] < target) {
        low = mid + 1;
      } else if (arr[mid] > target) {
        high = mid - 1;
      } else {
        high = mid;
      }

      mid = low + Math.floor((high - low) / 2);
    }
    return arr[high] === target ? high : -1;
  }
}

const binary = new BinarySearch();
const arr = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(binary.search(arr, 521));
