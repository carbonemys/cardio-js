# Cardio-js

A simple npm package that provides functions to convert between kilometers per hour (kph) and minutes per kilometer (mpk) and to convert between different time units, such as seconds, minutes, hours, and days.

## Installation

You can install this package using npm:

```bash
npm install time-units-converter
```

## Usage

To use this package in your project, require it at the top of your file:

```javascript
const converter = require('time-units-converter')
```

### Functions

kilometersPerHourToMinutesPerKilometer
This function takes a value in kilometers per hour and returns the equivalent value in minutes per kilometer.

```javascript
const mpk = converter.kilometersPerHourToMinutesPerKilometer(10)
console.log(mpk) // 6
```

#### kpuToMpk

This is an alias for kilometersPerHourToMinutesPerKilometer.

```javascript
const mpk = converter.kpuToMpk(10)
console.log(mpk) // 6
```

#### minutesPerKilometerToKilometersPerHour

This function takes a value in minutes per kilometer and returns the equivalent value in kilometers per hour.

```javascript
const kph = converter.minutesPerKilometerToKilometersPerHour(6)
console.log(kph) // 10
```

#### mpkToKpu

This is an alias for minutesPerKilometerToKilometersPerHour.

```javascript
const kph = converter.mpkToKpu(6)
console.log(kph) // 10
```

#### timeUnitsToTimeUnitsConverter

This function takes an object representing a duration in different time units and converts it to an object or a string in a specified output format.

```javascript
const duration = {
  seconds: 45,
  minutes: 32,
  hours: 5,
  days: 3,
}

const output = {
  days: true,
  hours: true,
  minutes: true,
  seconds: true,
}

const result = converter.timeUnitsToTimeUnitsConverter(duration, output)
console.log(result) // { days: 3, hours: 5, minutes: 32, seconds: 45 }
```

By default, the function returns an object with all time units, but you can specify the desired output format by setting the outputUnits parameter. You can also choose between returning the result as an object or a string by setting the returnType parameter.
