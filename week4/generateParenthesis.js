module.exports = {
 //param A : integer
 //return a array of strings
	generateParenthesis : function(A){
        var arr = []
        this.createPairs(arr, "", 0, 0, A);
        return arr;
	},

	createPairs : function(arr, current, open, close, max) {
        if (current.length == max * 2) {
            arr.push(current);
            return;
        }
        if (open < max)
            this.createPairs(arr, current + "(", open + 1, close, max);
        if (close < open)
            this.createPairs(arr, current + ")", open, close + 1, max);
	}
};
