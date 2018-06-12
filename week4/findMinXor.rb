def findMinXor(a)
  b = a.sort
  min = a[0] ^ a[1]

  b.each_index do |idx|
    break if idx == b.length - 1
    if ((b[idx] ^ b[idx + 1]) < min)
      min = b[idx] ^ b[idx + 1]
    end
  end
  min
end

p findMinXor([0, 2, 5, 7])
