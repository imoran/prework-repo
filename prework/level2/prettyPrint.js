module.exports = {
 //param A : integer
 //return a array of array of integers
	prettyPrint : function(a){
	  function oddDigit(a) {
		var counter = 1;
		var num = 1;
		var odd = 1;
		while (counter <= a) {
			if (num % 2 === 1) {
				odd = num
				counter++;
			}
			num++;
		}
		return odd;
	}

	var parentNum = oddDigit(a);
	var parentArr = new Array(parentNum);
	var edge = a;
	var num = a;

	for (var i = 0; i < parentNum / 2; i++) {
		var childArr1 = new Array(parentNum);
		var childArr2 = new Array(parentNum);
		num = a;
		for (var j = 0; j < parentNum / 2; j++) {
			childArr1[j] = num;
			childArr1[parentNum - 1 - j] = num;
			childArr2[j] = num;
			childArr2[parentNum - 1 - j] = num;
			if (edge < num) {
				num--;
			}
		}
		edge--;
		parentArr[i] = childArr1;
		parentArr[parentNum - 1 - i] = childArr2;
	}
	return parentArr;
	}
}
