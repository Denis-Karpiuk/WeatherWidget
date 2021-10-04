import { Grid } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import MenuIcon from '@material-ui/icons/Menu'

const SettingsCityItem = ({ city, deleteCity }) => {
	return (
		<div>
			<Grid
				container
				direction='row'
				justifyContent='space-between'
				spacing={3}
			>
				<Grid item>
					<Grid container>
						<MenuIcon />
						<span>{city}</span>
					</Grid>
				</Grid>
				<Grid item>
					<DeleteIcon onClick={() => deleteCity(city)} />
				</Grid>
			</Grid>
		</div>
	)
}
export default SettingsCityItem
