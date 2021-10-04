import ExploreIcon from '@material-ui/icons/Explore'
import SpeedIcon from '@material-ui/icons/Speed'
import s from './WeatherCityItem.module.css'

import {
	correctDirection,
	correctTemperature,
	correctVisibility,
	corretctDescription,
} from '../../../utils/correctorData'

const WeatherCityItem = ({ weatherCity }) => {
	return (
		<div className={s.weatherWidget}>
			<div className='location'>
				{weatherCity.name}, {weatherCity.sys.country}
			</div>
			<div className={s.temp}>
				<span>
					<img
						src={`https://openweathermap.org/img/wn/${weatherCity.weather[0].icon}@2x.png`}
					/>
				</span>
				<span>{correctTemperature(weatherCity.main.temp)}&deg;C</span>
			</div>
			<div className='feels'>
				<span>
					Feels like: {correctTemperature(weatherCity.main.feels_like)}&deg;C
				</span>
				<span> {corretctDescription(weatherCity.weather[0].description)}</span>
			</div>
			<div className='wind_pressure'>
				<span>
					<ExploreIcon fontSize={'large'} />
				</span>
				<span>{weatherCity.wind.speed} m/s</span>
				<span>{correctDirection(weatherCity.wind.deg)}</span>
				<span>
					<SpeedIcon fontSize={'large'} />
				</span>
				<span>{weatherCity.main.pressure} hPa</span>
			</div>
			<div className='hummidity_dewPoint'>
				<span>Humidity: {weatherCity.main.humidity}%</span>
				<span>dewPoint?</span>
			</div>
			<div>Visibility: {correctVisibility(weatherCity.visibility)}km </div>
		</div>
	)
}

export default WeatherCityItem
