let testArray = [4, 8, 15, 16, 23, 42];
let testKey = 15;

const binarySearch = (arr, key) => {
  let left = 0;
  let right = arr.length-1;

  while(left <= right){
    let mid = Math.floor((left + right)/2);

    if(arr[mid] < key){
      left = mid+1;
    } else if (arr[mid] > key) {
      right = mid-1;
    } else
      return mid;
  }
  return -1;
}

binarySearch(testArray, testKey);
