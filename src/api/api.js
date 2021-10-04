import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://api.openweathermap.org/data/2.5/weather',
	params: {
		appid: 'b3d068ea92de52f8325f6f37642c99f7',
		units: 'metric',
	},
})

export const getLocalWeather = (lat, lon) => {
	return instance.get(`?lat=${lat}&lon=${lon}`)
}

export const getCityWeather = cityCountry => {
	return instance.get(`?q=${cityCountry}`)
}
