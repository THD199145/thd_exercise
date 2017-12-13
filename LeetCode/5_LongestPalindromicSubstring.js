/**
 * Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

 * Example:

 * Input: "babad"

 * Output: "bab"

 * Note: "aba" is also a valid answer.
 * Example:

 * Input: "cbbd"

 * Output: "bb"
 
 * @param {string} 
 * @return {string}
 */
var longestPalindrome = function(s) {
	if (s.length <= 1) {
		return s;
	}
	var obj = {};
	var start = 0 , end = 0;
	var index = 0;
	var find = true;
	for (var i = 0 ; i < s.length ; i++) {
		var key = s[i];
		if (obj[key] && obj[key].length) {
				for (var arIndex = 0 ; arIndex < obj[key].length ; arIndex++) {
					var tempStart = obj[key][arIndex];
					var tempEnd = i;
					for (var a = tempStart, b = tempEnd ; a <= b ; a++, b--) {
						if (s[a] != s[b]) {
							find = false;
							break;
						}
					}
					if (find) {
						if (tempEnd - tempStart > end - start) {
							start = tempStart;
							end = tempEnd;
						}
					}
					find = true;
				}
			
		} else {
			obj[key] = [];
		}
		obj[key].push(index);
		index++;
	}
	//console.log(start, end);
	console.log(s.substr(start, end - start + 1), start, end);
	//console.log(obj);
	return start + end === 0 ? s[start] : s.substr(start, end - start + 1);
};


var longestPalindrome_1 = function(s) {
	if (s.length <= 1) {
		return s;
	}
	var obj = {};
	var start = 0 , end = 0;
	var index = 0;
	var find = true;
	for (var i = 0 ; i < s.length ; i++) {
		var tempStart, tempEnd;
		if (s[i] === s[i + 1]) {
			tempStart = i;
			tempEnd = i + 1;
			for (var a = tempStart, b = tempEnd ; a >= 0 && b < s.length ; a--, b++) {
				
				if (s[a] != s[b]) {
					break;
				} else {
					if (b - a > end - start) {
						start = a;
						end = b;
					}
				}
			}
		} 
		if (s[i - 1] === s[i + 1]) {
			tempStart = i - 1;
			tempEnd = i + 1;
			for (var a = tempStart, b = tempEnd ; a >= 0 && b < s.length ; a--, b++) {
				
				if (s[a] != s[b]) {
					break;
				} else {
					if (b - a > end - start) {
						start = a;
						end = b;
					}
				}
			}
		}

	}
	//console.log(start, end);
	console.log(s.substr(start, end - start + 1), start, end);
	//console.log(obj);
	return start + end === 0 ? s[start] : s.substr(start, end - start + 1);
};

//abba babad abbacc "babadada" "abcda"
longestPalindrome_1('ccd');
longestPalindrome_1('bbbbbb');
longestPalindrome_1('bbbbb');
longestPalindrome_1('bbbb');
longestPalindrome_1('bb');
longestPalindrome_1('ccc');
longestPalindrome_1('babadada');
longestPalindrome_1('babad');
longestPalindrome_1('abbacc');
longestPalindrome_1('cbbd');
longestPalindrome_1('a');
longestPalindrome_1('');
//longestPalindrome('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');