function permutation(A) {
	var list = [];
	if(A && A.length > 0)
		this.swap(A, 0, list);
	return list;
}

function swap(A, i, list) {
	if (i === A.length - 1) {
		list.push(A.slice());
	} else {
		for (var j = i; j < A.length; j++) {
			A[j] = [A[i], A[i] = A[j]][0];
			this.swap(A, i + 1, list);
			A[j] = [A[i], A[i] = A[j]][0];
		}
	}
}
