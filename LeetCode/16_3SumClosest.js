/**
 * For example, given array S = {-1 2 1 -4}, and target = 1.

    The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 4
var threeSumClosest = function(nums, target) {
  if (nums.length < 3) {
		return [];
	}
	nums = nums.sort((a, b) => a - b);
	var result;
	for (var i = 0 ; i < nums.length - 2 ; i++) {
		if (i != 0 && nums[i] === nums[i - 1]) continue;
		var start = i + 1;
		var end = nums.length - 1;
		while (start < end) {
			var temp = nums[i] + nums[start] + nums[end];
			if (temp === target) {
				console.log('out')
				console.log(temp)
				console.log('out')
				return temp;
			} else if (temp > target) {
				end--;
			} else {
				start++;
			}

			if (result === undefined) {
				result = temp;
			} else {
				if (Math.abs(target - result) > Math.abs(target - temp)) {
					result = temp;
				}
			}
		}
	}
	console.log(result);
	return result;
};

// threeSumClosest([-1, 1, 2, -4], 1);
// threeSumClosest([0,1,2], 3);
// threeSumClosest([-1,0,1,2,-1,-4], 0);
threeSumClosest([0,2,1,-3], 1);