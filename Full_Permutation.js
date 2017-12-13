function recur(arr) {
  (function fn(n) {
    for (var i = n ; i < arr.length ; i++) {
      swap(arr, i, n);
      if (n + 1 < arr.length - 1) {
        fn(n + 1);
      } else {
        console.log(arr);
      }
      swap(arr, i, n);
    }
  })(0);
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}