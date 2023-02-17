const { timeUnitsToTimeUnitsConverter } = require('../index')

test('converts minutes to hours', () => {
  const minutes = 70

  const { hours } = timeUnitsToTimeUnitsConverter({ minutes }, { hours: true })

  const expectedHours = 1
  expect(hours).toBe(expectedHours)
})

test('converts hours to days', () => {
  const hours = 48

  const { days } = timeUnitsToTimeUnitsConverter({ hours }, { days: true })

  const expectedDays = 2
  expect(days).toBe(expectedDays)
})

test('converts hours to minutes', () => {
  const hours = 48

  const { minutes } = timeUnitsToTimeUnitsConverter(
    { hours },
    { minutes: true, days: false, hours: false },
  )

  const expectedMinutes = 48 * 60
  expect(minutes).toBe(expectedMinutes)
})
