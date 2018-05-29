class Solution
  def isPalindrome(a)
    str = a.downcase.gsub(/\W/, "")
    str == str.reverse ? 1 : 0
  end
end
