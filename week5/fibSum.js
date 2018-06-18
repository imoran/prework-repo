function fibsum(n) {
	var fibSequence = fibonacci(n);
	var minNum = 0
	var sum = 0
	for (var i = fibSequence.length - 1; i >= 0; i--) {
		if (sum + fibSequence[i] <= n) {
			sum += fibSequence[i]
			minNum++
		}
		if (sum === n) return minNum
	}
}

function fibonacci(n) {
	var result = [1, 1]
	for (var i = 2; result[i - 1] < n; i++)
		result[i] = result[i - 1] + result[i - 2]
	return result
}
