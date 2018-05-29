class Solution
  def lengthOfLastWord(a)
    a.strip!
    a.length < 1 ? 0 : a.split(' ')[-1].length
  end
end
