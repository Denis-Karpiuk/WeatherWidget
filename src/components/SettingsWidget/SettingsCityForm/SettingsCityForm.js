import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn'
import { Controller, useForm } from 'react-hook-form'
import enter from '../../../assets/enter.png'

const SettingsCityForm = ({ addCity }) => {
	const { control, handleSubmit, reset } = useForm()
	const onSubmit = data => {
		addCity(data.city)
		reset()
	}

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Grid
					container
					direction='column'
					justifyContent='flex-start'
					alignItems='baseline'
					spacing={1}
				>
					<Grid item>
						<label>Add location:</label>
					</Grid>
					<Grid item>
						<Controller
							name='city'
							control={control}
							defaultValue=''
							render={({ field }) => (
								<TextField
									{...field}
									id='outlined-basic'
									label='City Name'
									variant='outlined'
									size='small'
								/>
							)}
						/>
						<input type='image' src={enter} />
					</Grid>
				</Grid>
			</form>
		</div>
	)
}
export default SettingsCityForm
