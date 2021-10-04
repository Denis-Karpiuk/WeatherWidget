import Paper from '@material-ui/core/Paper'
import SettingsCityForm from './SettingsCityForm/SettingsCityForm'
import SettingsCityItem from './SettingsCityItem/SettingsCityItem'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import { Grid } from '@material-ui/core'

const SettingsWidget = ({ cities, offEditMode, addCity, deleteCity }) => {
	return (
		<div className='settings'>
			<Paper elevation={3} style={{ padding: 15 }}>
				<Grid container direction='row' justifyContent='space-between'>
					<Typography variant='h6' gutterBottom>
						Settings
					</Typography>
					<CloseIcon onClick={offEditMode} />
				</Grid>

				{cities.map((city, index) => (
					<SettingsCityItem key={city} city={city} deleteCity={deleteCity} />
				))}
				<SettingsCityForm addCity={addCity} />
			</Paper>
		</div>
	)
}

export default SettingsWidget
