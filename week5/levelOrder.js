function levelOrder(A) {
	var nodeValues = [];
	if (A !== null) traversal(nodeValues, 0, A);
	return nodeValues;
}

function traversal(nodeValues, counter, root) {
	if (nodeValues[counter]) {
		nodeValues[counter].push(root.data);
	} else {
		nodeValues[counter] = [root.data];
	}
	counter++;
	if (root.left !== null) traversal(nodeValues, counter, root.left);
	if (root.right !== null) traversal(nodeValues, counter, root.right);
}
