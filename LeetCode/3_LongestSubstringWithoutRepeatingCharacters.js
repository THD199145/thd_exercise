/**
 * Given a string, find the length of the longest substring without repeating characters.

 * Examples:

 * Given "abcabcbb", the answer is "abc", which the length is 3.

 * Given "bbbbb", the answer is "b", with the length of 1.

 * Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 * @param {string}
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	var len = 0;
	var obj = {};
	for (var m = 0 ; m < s.length ; m++) {
		var key = s[m];
		if (obj[key]) {
			var keys = Object.keys(obj);
			len = len > keys.length ? len : keys.length;
			for (var i = 0 ; i < keys.length ; i ++) {
				if (keys[i]  === key) {
					delete obj[keys[i]];
					break;
				}
				delete obj[keys[i]];
			}
		}
		obj[key] = 1;
	}
    var lenO = Object.keys(obj).length;
    return len > lenO ? len : lenO;
};
//abcdd aab pwwkew '' abcdeefhijk bbbbb abcb dvdf "ohomm" "bbtablud"
lengthOfLongestSubstring('bbtablud');
lengthOfLongestSubstring('ohomm');
lengthOfLongestSubstring('abcabcbb');
lengthOfLongestSubstring('dvdf');
lengthOfLongestSubstring('abcdd');
lengthOfLongestSubstring('abba');
lengthOfLongestSubstring('aab');
lengthOfLongestSubstring('');
lengthOfLongestSubstring('abcdeefhijk');
lengthOfLongestSubstring('bbbbb');
lengthOfLongestSubstring('abcb');