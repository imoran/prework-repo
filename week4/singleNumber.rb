def singleNumber(a)
  result = a[0]
  (1...a.length).each { |i| result ^= a[i] }
  result
end

p singleNumber([1, 2, 2, 3, 1])
