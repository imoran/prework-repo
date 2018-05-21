class Solution
    # @param a : array of integers
    # @return an array of array of integers
    def permute(a)
      return [a] if a.length <= 1

      first = a.shift
      perms = permute(a)
      total_permutations = []
    
      perms.each do |perm|
        (0..perm.length).each do |i|
          total_permutations << perm[0 ... i] + [first] + perm[i .. -1]
        end
      end
      total_permutations.uniq
    end
end
