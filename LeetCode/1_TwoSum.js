function twoSum(arr, tar) {
  for (var i = 0 ; i < arr.length ; i++) {
    for (var j = i + 1 ; j < arr.length ; j++) {
      if (tar === arr[i] + arr[j]) {
        console.log(i, j);
      }
    }
  }
};
// test 1
// master 1
// test branch 1
var twoSum = function(nums, target) {
  var obj = {};
  for (var i = 0 ; i < nums.length ; i++) {
      if ((target - nums[i]) in obj) {
          return [obj[target - nums[i]], i];
      }
      
      obj[nums[i]] = i;
  }
  return [];
};

twoSum([2, 4, 8, 11], 13);