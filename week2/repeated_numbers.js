module.exports = {
repeatedNumber : function(A){
  obj = {}
    for (var i = 0; i < A.length; i++) {
      if (A[i] in obj) {
        return A[i]
      } else {
        obj[A[i]] = true
      }
    }
  }
};
