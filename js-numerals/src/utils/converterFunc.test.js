import { converterFunc } from './converterFunc'

it('Check for zero', () => {
  expect(converterFunc(0)).toMatch('zero')
})
it('Check for negativ numbers', () => {
  expect(converterFunc(-1)).toMatch('minus one')
  expect(converterFunc(-5022)).toMatch('minus five thousand and twenty-two')
  expect(converterFunc(-89441)).toMatch(
    'minus eighty-nine thousand four hundred and forty-one'
  )
})
it('Check for one digit', () => {
  expect(converterFunc(1)).toMatch('one')
  expect(converterFunc(2)).toMatch('two')
  expect(converterFunc(7)).toMatch('seven')
})
it('Check for two digits below 20', () => {
  expect(converterFunc(10)).toMatch('ten')
  expect(converterFunc(13)).toMatch('thirteen')
  expect(converterFunc(17)).toMatch('seventeen')
})
it('Check for two digits over 20', () => {
  expect(converterFunc(21)).toMatch('twenty-one')
  expect(converterFunc(42)).toMatch('forty-two')
  expect(converterFunc(66)).toMatch('sixty-six')
})

it('Check for three digits', () => {
  expect(converterFunc(100)).toMatch('one hundred')
  expect(converterFunc(202)).toMatch('two hundred and two')
  expect(converterFunc(777)).toMatch('seven hundred and seventy-seven')
})
it('Check for four digits', () => {
  expect(converterFunc(1999)).toMatch(
    'one thousand nine hundred and ninety-nine'
  )
  expect(converterFunc(2001)).toMatch('two thousand and one')
  expect(converterFunc(9999)).toMatch(
    'nine thousand nine hundred and ninety-nine'
  )
})
it('Check for five digits', () => {
  expect(converterFunc(12376)).toMatch(
    'twelve thousand three hundred and seventy-six'
  )
  expect(converterFunc(17999)).toMatch(
    'seventeen thousand nine hundred and ninety-nine'
  )
  expect(converterFunc(99998)).toMatch(
    'ninety-nine thousand nine hundred and ninety-eight'
  )
})
it('Check for six digits', () => {
  expect(converterFunc(100001)).toMatch('one hundred thousand and one')
  expect(converterFunc(342251)).toMatch(
    'three hundred and forty-two thousand two hundred and fifty-one'
  )
  expect(converterFunc(999998)).toMatch(
    'nine hundred and ninety-nine thousand nine hundred and ninety-eight'
  )
})
it('Check for seven digits', () => {
  expect(converterFunc(1000000)).toMatch('one million')
  expect(converterFunc(1300420)).toMatch(
    'one million three hundred thousand four hundred and twenty'
  )
  expect(converterFunc(9999998)).toMatch(
    'nine million nine hundred and ninety-nine thousand nine hundred and ninety-eight'
  )
})
