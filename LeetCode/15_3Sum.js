/**
 * For example, given array S = [-1, 0, 1, 2, -1, -4],
 * A solution set is:
 * [
 *  [-1, 0, 1],
 *  [-1, -1, 2]
 * ]
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum_timeout = function(nums) {
  if (nums.length < 3) {
		return [];
	}
	var result = [];
	var obj = {};
	var find = {};
	nums = nums.sort((a, b) => a - b);
	for (var i = 0 ; i < nums.length ; i++) {
		if (nums[i] != nums[i - 1]) {
			var target = 0 - nums[i];
			for (var j = i + 1 ; j < nums.length ; j++) {
				if ((target - nums[j]) in obj) {
					if (!find[nums[j]]) {
					  result.push([nums[i], nums[j], nums[obj[target - nums[j]]]]);
					  find[nums[j]] = true;
					}
				}
				obj[nums[j]] = j;
			}
			find = {};
			obj = {};
		}
	}
	console.log(result);
	return result;
};

var threeSum = function(nums) {
	if (nums.length < 3) {
		return [];
	}
	nums = nums.sort((a, b) => a - b);
	var result = [];
	for (var i = 0 ; i < nums.length - 2 ; i++) {
		if (nums[i] === nums[i - 1]) continue;
		var target = 0 - nums[i];
		var start = i + 1;
		var end = nums.length - 1;
		while (start < end) {
			if (target === nums[start] + nums[end]) {
				result.push([nums[i], nums[start], nums[end]]);
				start++;
				end--;
				while (start < end && nums[start] === nums[start - 1]) {
					start++;
				}
				while (start < end && nums[end] === nums[end + 1]) {
					end--;
				}
			} else if (target < nums[start] + nums[end]) {
				end--;
			} else {
				start++;
			}
		}
	}
	console.log(result);
	return result;
}
// S = [-1, 0, 1, 2, -1, -4]
threeSum([-1, 0, 1, 2, -1, -4]);
threeSum([0]);
threeSum([0, 0, 0])
threeSum([0,0,0,0])