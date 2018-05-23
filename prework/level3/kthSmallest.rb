class Solution
  def kthsmallest(a, b)
    arr2 = a.dup
    arr2.sort!
    return arr2[b - 1]
  end
end
