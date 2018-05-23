def anagrams(input)
  hash = Hash.new { |h, k| h[k] = [] }

  input.each do |i|
    hash[i.split('').sort] = []
  end

  input.each.with_index(1) do |j, idx|
    j = j.split('').sort
    if hash.key?(j)
      hash[j] << idx
    end
  end
  hash.values.to_a
end
