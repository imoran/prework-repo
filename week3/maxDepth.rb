# end
class Solution
    # @param a : root node of tree
    # @return an integer
    def maxDepth(a)
      return 0 unless a
      left = maxDepth(a.left)
      right = maxDepth(a.right)
      
      [left, right].max + 1
    end
end
