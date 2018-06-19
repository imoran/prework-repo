public class Solution {

	public static TreeNode sortedListToBST(ListNode A) {
		ArrayList<Integer> listOfNodes = new ArrayList<Integer>();
		while (A != null) {
			listOfNodes.add(A.val);
			A = A.next;
		}
		int mid = (int)Math.floor(listOfNodes.size() / 2);
		TreeNode root = new TreeNode(listOfNodes.get(mid));
		arrayToBST(root, listOfNodes, 0, mid, listOfNodes.size() - 1);
		return root;
	}

	public static void arrayToBST(TreeNode root, ArrayList<Integer> listOfNodes, int left, int mid, int right){
		if ((mid > left) && (mid - left > 0)) {
			int index = (mid - left) / 2 + left;
			TreeNode leftNode = new TreeNode(listOfNodes.get(index));
			root.left = leftNode;
			arrayToBST(leftNode, listOfNodes, left, index, mid - 1);
		}

		if ((right > mid) && (right - mid > 0)) {
			int rightMid = right - mid;
			int index = rightMid / 2 + ((rightMid % 2 == 0) ? 0 : 1) + mid;
			TreeNode rightNode = new TreeNode(listOfNodes.get(index));
			root.right = rightNode;
			arrayToBST(rightNode, listOfNodes, mid + 1, index, right);
		}
	}
}
