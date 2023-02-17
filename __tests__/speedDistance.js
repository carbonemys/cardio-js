const { speedTimeToDistance, speedDistanceToTime } = require('../index')

// Prompt: js write an arrow function 'speedDistanceToTime' that passes both (jest) tests below
describe('speedDistanceToTIme', () => {
  test('converts kph + distance (km) to time', () => {
    const kph = 15
    const kilometers = 10

    const { minutes } = speedDistanceToTime({ kph }, kilometers)

    const expectedMinutes = 40
    expect(minutes).toBe(expectedMinutes)
  })

  // mpk = minutes per kilometer
  test('converts mpk + distance (km) to time', () => {
    const mpk = 4
    const kilometers = 10

    const { minutes } = speedDistanceToTime({ mpk }, kilometers)

    const expectedMinutes = 40
    expect(minutes).toBe(expectedMinutes)
  })
})

describe('speedTimeToDistance', () => {
  test('converts kph + time to distance', () => {
    const kph = 15
    const hours = 1
    const minutes = 30
    const seconds = 0

    const km = speedTimeToDistance({ kph }, { hours, minutes, seconds })

    const expectedDistance = 22.5
    expect(km).toBe(expectedDistance)
  })

  test('converts mpk + time to distance', () => {
    const mpk = 5
    const hours = 1
    const minutes = 30
    const seconds = 0

    const km = speedTimeToDistance({ mpk }, { hours, minutes, seconds })

    const expectedDistance = 18
    expect(km).toBe(expectedDistance)
  })
})
