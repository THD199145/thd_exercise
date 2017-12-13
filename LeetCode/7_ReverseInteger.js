/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
	var ne = false;
	var start, end;
	var result = '';
	if (x < 0) {
		ne = true;
		x = Math.abs(x).toString();
	} else {
		x = Math.abs(x).toString();
	}
	if (x.length % 2 === 0) {
		end = x.length / 2;
		start = x.length / 2 - 1;
		for (var i = start, j = end ; i >= 0 && j < x.length ; i--, j++) {
			result = x[j] + result + x[i];
		}
	} else {
		var index = (x.length - 1) / 2;
		result = x[index];
		for (var i = index - 1, j = index + 1 ; i >= 0 && j < x.length ; i--, j++) {
			result = x[j] + result + x[i];
		}

	}
	result = parseInt(result);
	if (result > 2147483647) {
		return 0;
	}
	console.log(ne ? result * -1 : result)
	return ne ? result * -1 : result;
};

// 12, 111
//2147483647
//
reverse(111)
reverse(12)
reverse(12345)
reverse(12345678910)
reverse(123456)
reverse(-12345)