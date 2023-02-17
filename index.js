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

module.exports = {
  kilometersPerHourToMinutesPerKilometer,
  kpuToMpk,
  minutesPerKilometerToKilometersPerHour,
  mpkToKpu,
  timeUnitsToTimeUnitsConverter,
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
