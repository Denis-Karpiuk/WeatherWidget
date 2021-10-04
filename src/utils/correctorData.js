const windDirection = [
	'N',
	'NNE',
	'NE',
	'ENE',
	'E',
	'ESE',
	'SE',
	'SSE',
	'S',
	'SSW',
	'SW',
	'WSW',
	'W',
	'WNW',
	'NW',
	'NNW',
]

export const correctTemperature = temperature => Math.floor(temperature)

export const corretctDescription = description =>
	description[0].toUpperCase() + description.slice(1)

export const correctVisibility = visibility => (visibility / 1000).toFixed(1)

export const correctDirection = degrees => {
	degrees = Math.round(degrees / (360 / 16), 0)
	return windDirection[degrees]
}
