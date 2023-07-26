import { Component, Field, NumberField, SelectField, TextField } from '@contember/admin'

export const RideForm = Component(() => <>
	<TextField field="personId" label="Person id" />
	<SelectField
		field="car"
		label="Car"
		lazy={false}
		options="Car"
		optionLabel={<>
			License plate{': '}
			<Field field="licensePlate" />
		</>}
		allowNull
	/>
	<SelectField
		field="purpose"
		label="Purpose"
		options={[{ value: 'personal', label: 'personal' }, { value: 'corporate', label: 'corporate' }]}
		allowNull
	/>
	<TextField field="destination" label="Destination" />
	<NumberField field="endMileage" label="End mileage" />
	<SelectField field="user" label="User" lazy options="User.name" allowNull />
</>)
