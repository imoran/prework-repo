# Definition for a  binary tree node
# class TreeNode
#     attr_accessor :left,:right,:data
#     def initialize(data)
#         @data = data
#         @left = nil
#         @right = nil
#     end
# end
class Solution
    # @param a : root node of tree
    # @return an array of integers
    def inorderTraversal(a)
        current = a
        stack = []
        result = []

        loop do
          if !current.nil?
            stack.push(current)
            current = current.left
          else
            if stack.empty?
              break
            else
              current = stack.pop
              result.push(current.data)
              current = current.right
            end
          end
        end
        result
    end
end
