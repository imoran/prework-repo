
function plusOne(a) {
  var flag = true;
  for (var i = A.length - 1; i >= 0; i--) {
    if(A[i] < 9) {
      A[i]++
      flag = false;
      break;
    } else {
      A[i] = 0
    }
  }
  if (flag) {
    A.unshift(1)
  }
  for (var i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      A.shift()
      i--;
    } else {
      break;
    }
  }
  return A;
}
