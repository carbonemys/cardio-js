const kilometersPerHourToMinutesPerKilometer = (kph) => {
  const mpk = (1 / kph) * 60
  return mpk
}

const kpuToMpk = kilometersPerHourToMinutesPerKilometer

const minutesPerKilometerToKilometersPerHour = (mpk) => {
  const kph = (1 / mpk) * 60
  return kph
}

const mpkToKpu = minutesPerKilometerToKilometersPerHour

const timeUnitsToTimeUnitsConverter = (
  { seconds, minutes, hours, days },
  outputUnits = {},
) => {
  // Convert all to seconds
  let totalSeconds = 0
  totalSeconds += seconds || 0
  totalSeconds += minutes * 60 || 0
  totalSeconds += hours * 60 * 60 || 0
  totalSeconds += days * 60 * 60 * 24 || 0

  return formatSeconds(totalSeconds, outputUnits)
}

const kmToMiles = (kilometers) => {
  const miles = kilometers * 0.621371192
  return miles
}

const speedTimeToDistance = (speed, time) => {
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

const speedDistanceToTime = ({ kph, mpk }, distance) => {
  if (kph !== undefined) {
    const timeInHours = distance / kph
    const minutes = timeInHours * 60
    return { minutes }
  } else if (mpk !== undefined) {
    const timeInMinutes = mpk * distance
    return { minutes: timeInMinutes }
  } else {
    throw new Error('Please provide either kph or mpk.')
  }
}

module.exports = {
  kilometersPerHourToMinutesPerKilometer,
  kpuToMpk,
  minutesPerKilometerToKilometersPerHour,
  mpkToKpu,
  timeUnitsToTimeUnitsConverter,
  kmToMiles,
  speedTimeToDistance,
  speedDistanceToTime,
}

// Helpers
function formatSeconds(
  seconds,
  {
    days = true,
    hours = true,
    minutes = true,
    seconds: showSeconds = true,
  } = {},
  returnType = 'object',
) {
  let remainingSeconds = seconds
  const timeValues = {}

  if (days) {
    const daysValue = Math.floor(remainingSeconds / (24 * 60 * 60))
    timeValues.days = daysValue
    remainingSeconds -= daysValue * 24 * 60 * 60
  }

  if (hours) {
    const hoursValue = Math.floor(remainingSeconds / (60 * 60))
    timeValues.hours = hoursValue
    remainingSeconds -= hoursValue * 60 * 60
  }

  if (minutes) {
    const minutesValue = Math.floor(remainingSeconds / 60)
    timeValues.minutes = minutesValue
    remainingSeconds -= minutesValue * 60
  }

  if (showSeconds) {
    timeValues.seconds = remainingSeconds
  }

  if (returnType === 'object') {
    return timeValues
  }

  if (returnType === 'string') {
    const timeString = Object.entries(timeValues)
      .filter(([_, value]) => value !== 0)
      .map(([key, value]) => `${value} ${key}`)
      .join(', ')

    return timeString
  }
}
