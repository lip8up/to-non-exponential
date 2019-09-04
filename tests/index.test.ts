import toNonExponential from '@/index'

test('1e-2 => 0.01', () => {
  expect(toNonExponential(1e-2)).toBe('0.01')
})

test('18.88e-2 => 8.1888', () => {
  expect(toNonExponential(818.88e-2)).toBe('8.1888')
})

test('8 => 8', () => {
  expect(toNonExponential(8)).toBe('8')
})

test('8.1888 => 8.1888', () => {
  expect(toNonExponential(8.1888)).toBe('8.1888')
})

test('1e-8 => 0.00000001', () => {
  expect(toNonExponential(1e-8)).toBe('0.00000001')
})

test('1e-18 => 0.000000000000000001', () => {
  expect(toNonExponential(1e-18)).toBe('0.000000000000000001')
})

test('0.1 + 0.2 => 0.30000000000000004', () => {
  expect(toNonExponential(0.1 + 0.2)).toBe('0.30000000000000004')
})
