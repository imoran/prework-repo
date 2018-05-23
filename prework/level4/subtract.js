module.exports = {
 //param A : head node of linked list
 //return the head node in the linked list
	subtract : function(A){
    function subtract(node) {
      var arr = [];
      var pointer = node;
      while (pointer.next) {
        arr.push(pointer.data)
      }
      var end = arr.length - 1;
      for (var i = 0; i < arr.length / 2; i++) {
        arr[i] = arr[end] - arr[i];
        end--;
      }
      var head = new Node(arr[0])
      pointer = head;
      for (var i = 1; i < arr.length; i++) {
        var newNode = new Node(arr[i])
        pointer.next = newNode;
      }
      return head;
    }
	}
};
