// Prompt: js function called speedTimeToDistance that accepts two arguments: 1. an onject with either kph (kilometers per hour) or mpk (minutes per kilometer) and 2. an object with one or multiple values 'seconds', 'minutes', 'hours'. The function should output a distance in kilometers, based on the speed (argument 1) and the time elapsed with this speed (argument 2)

function speedTimeToDistance(speed, time) {
  let timeInSeconds = 0

  if (time.hasOwnProperty('seconds')) {
    timeInSeconds += time.seconds
  }

  if (time.hasOwnProperty('minutes')) {
    timeInSeconds += time.minutes * 60
  }

  if (time.hasOwnProperty('hours')) {
    timeInSeconds += time.hours * 3600
  }

  if (speed.hasOwnProperty('kph')) {
    const distanceInKm = speed.kph * (timeInSeconds / 3600)
    return distanceInKm
  }

  if (speed.hasOwnProperty('mpk')) {
    const distanceInKm = (1 / speed.mpk) * (timeInSeconds / 60)
    return distanceInKm
  }

  throw new Error('Invalid input')
}

console.log(speedTimeToDistance({ kph: 10 }, { hours: 1, minutes: 30 }))
