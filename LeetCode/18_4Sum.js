/**
 * For example, given array S = [1, 0, -1, 0, -2, 2], and target = 0.

 * A solution set is:
 * [
 *	[-1,  0, 0, 1],
 *	[-2, -1, 1, 2],
 *	[-2,  0, 0, 2]
 * ]
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  if (nums.length < 4) {
		return [];
	}
	nums = nums.sort((a, b) => a - b);
	result = [];
	for (var i = 0 ; i < nums.length - 3 ; i++) {
		if (nums[i] === nums[i - 1]) continue;
		var newTarget = target - nums[i];
		var start = i + 1;
		console.log(nums, start, newTarget);
		threeSum(nums, start, newTarget).map(ar => {
			if (ar.length === 3) {
				result.push([nums[i]].concat(ar));
			}
		});
	}
	console.log(result);
	return result;
};

var threeSum = function(nums, startIndex, orTarget) {
	if (nums.length < 3) {
		return [];
	}
	var result = [];
	for (var i = startIndex ; i < nums.length - 2 ; i++) {
		if (i != startIndex && nums[i] === nums[i - 1]) continue;
		var target = orTarget - nums[i];
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



// -6 -2 -1 0 0 1 2 4 5
//fourSum([1, 0, -1, 0, -2, 2], 0);
fourSum([0,0,0,0], 0);