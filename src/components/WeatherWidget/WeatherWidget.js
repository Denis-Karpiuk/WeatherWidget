import SettingsIcon from '@material-ui/icons/Settings'
import { useEffect, useState } from 'react'
import { getCityWeather, getLocalWeather } from '../../api/api'
import SettingsWidget from '../SettingsWidget/SettingsWidget'
import WeatherCityItem from './WeatherCityItem/WeatherCityItem'
import s from './WeatherCityItem/WeatherCityItem.module.css'

const WeatherWidget = () => {
	const [userConfiguration, setUserConfiguration] = useState(() => {
		const userConfig = JSON.parse(localStorage.getItem('cities'))
		return !userConfig ? [] : userConfig
	})
	const [location, setLocation] = useState(null)
	const [localCityWeather, setLocalCityWeather] = useState(null)
	const [citiesWeather, setCitiesWeather] = useState(null)
	const [cities, setCities] = useState(userConfiguration)
	const [editMode, setEditMode] = useState(false)
	const deleteCity = city => setCities(cities.filter(item => item !== city))
	const addCity = city => setCities([...cities, city])
	const onEditMode = () => setEditMode(true)
	const offEditMode = () => {
		setUserConfiguration(localStorage.setItem('cities', JSON.stringify(cities)))
		setEditMode(false)
	}

	useEffect(() => {
		const getLocation = () => {
			const succsessLocation = position => {
				setLocation({
					lat: position.coords.latitude,
					lon: position.coords.longitude,
				})
			}
			const errorLocation = () => setLocation('No location data')
			if (!navigator.geolocation)
				setLocation('Your browser does not support geolocation')
			navigator.geolocation.getCurrentPosition(succsessLocation, errorLocation)
		}
		getLocation()
	}, [])

	useEffect(() => {
		const getLocalWeatherData = async location => {
			try {
				const response = await getLocalWeather(location.lat, location.lon)
				setLocalCityWeather(response.data)
			} catch (error) {
				console.log('Unable to obtain weather data')
			}
		}
		location && getLocalWeatherData(location)
	}, [location])

	useEffect(() => {
		const getCityWeatherData = async cities => {
			try {
				let promises = cities.map(city => getCityWeather(city))
				let results = await Promise.all(promises)
				setCitiesWeather(results)
			} catch (error) {
				console.log('Error')
			}
		}
		getCityWeatherData(cities)
	}, [cities])

	return (
		<div className={s.widget}>
			{editMode && (
				<div className={s.settings}>
					<SettingsWidget
						cities={cities}
						offEditMode={offEditMode}
						addCity={addCity}
						deleteCity={deleteCity}
					/>
				</div>
			)}
			{!editMode && (
				<div className={s.weather}>
					{cities.length === 0 && (
						<SettingsIcon onClick={onEditMode} fontSize={'small'} />
					)}
					{localCityWeather && cities.length === 0 ? (
						<div className={s.localWeather}>
							<WeatherCityItem weatherCity={localCityWeather} />
						</div>
					) : (
						<div className={s.citiesWeather}>
							{citiesWeather &&
								citiesWeather.map(citiesWeather => (
									<div className={s.cityWeather} key={citiesWeather.data.id}>
										<WeatherCityItem weatherCity={citiesWeather.data} />
									</div>
								))}
						</div>
					)}
				</div>
			)}
		</div>
	)
}

export default WeatherWidget
